'use server'
import NextAuth, { type Session, type User } from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import type { User as UserType } from '@/lib/definitions'
import prisma from '@/lib/prisma'

async function getUser(email: string): Promise<UserType | null> {
  try {
    const user = await prisma.user.findUnique({ where: { email } })
    return user
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

export async function createUser(
  email: string,
  password: string,
  name: string
): Promise<UserType> {
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        role: 'USER',
      },
    })
    return user
  } catch (error) {
    console.error('Failed to create user:', error)
    throw new Error('Failed to create user.')
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUser(email)
          if (!user) return null

          const passwordsMatch = await bcrypt.compare(password, user.password)
          if (passwordsMatch) {
            return user
          }
        }

        console.log('Invalid credentials')
        return null
      },
    }),
  ],
})
