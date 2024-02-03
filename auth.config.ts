import type { NextAuthConfig } from 'next-auth'

declare module 'next-auth' {
  interface User {
    role: string
  }
}

//paths only for logged in users
const userOnlyPaths = ['/profile', '/account']

//paths only for admin users (but admin users can access all paths)
const adminOnlyPaths = ['/admin']

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      //false to redirect to login
      //true to continue
      const isLoggedIn = !!auth?.user
      const userRole = auth?.user?.role
      const currentUrl = new URL(nextUrl.pathname, nextUrl.origin)
      const callbackUrl = nextUrl.searchParams.get('callbackUrl')
      const redirectUrl = callbackUrl
        ? new URL(callbackUrl, nextUrl)
        : new URL('/', nextUrl)
      const isUserOnlyPath = userOnlyPaths.includes(currentUrl.pathname)
      const isAdminOnlyPath = adminOnlyPaths.includes(currentUrl.pathname)

      //not logged in and trying to access a protected path
      if (!isLoggedIn && (isAdminOnlyPath || isUserOnlyPath)) {
        return false
      }

      //logged in
      if (isLoggedIn) {
        //if user is trying to access an admin only path and is not an admin
        if (isAdminOnlyPath && userRole !== 'ADMIN') {
          return Response.redirect(redirectUrl)
        }
        //dont allow users to access login page if they are already logged in
        if (currentUrl.pathname.startsWith('/login')) {
          return Response.redirect(redirectUrl)
        }
      }
      return true
    },
    jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    session({ session, token }: any) {
      return {
        ...session,
        user: {
          ...session.user,
          role: token?.role,
        },
      }
    },
    redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig
