'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu'
import { useEffect, useState } from 'react'
import { getSession } from '@/components/auth'
import { Session } from 'next-auth'
import { signOut } from '@/auth'
import { PowerIcon } from '@heroicons/react/24/outline'
import SignOut from '../ui/authentication/sign-out'
import Link from 'next/link'

export function TopNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    ;(async () => {
      const session = await getSession()
      setSession(session)
    })()
  }, [])
  const email = session?.user?.email
  return (
    <nav>
      <div className="bg-purple-600 flex justify-between p-1 px-8 text-sm">
        <div className="flex space-x-2">
          <div>email</div>
          <div>phoneNumber</div>
        </div>
        <div className="hidden md:flex space-x-2 ">
          <div>Language</div>
          <div>Currency</div>
          {email && <div>{email}</div>}
          {email && (
            <div>
              <SignOut />
            </div>
          )}
          {!email && <Link href="/login" className='hover:text-red-300'>Login</Link>}
          <div>Wishlist</div>
          <div>Cart</div>
        </div>
        <div className="md:hidden">
          {/* Hamburger icon for small screens */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <svg
                className="w-4 h-4 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Language</DropdownMenuItem>
              <DropdownMenuItem>Currency</DropdownMenuItem>
              {email && (
                <DropdownMenuItem>
                  <div>{email}</div>
                </DropdownMenuItem>
              )}
              {!email && <DropdownMenuItem>Login</DropdownMenuItem>}
              <DropdownMenuItem>Wishlist</DropdownMenuItem>
              <DropdownMenuItem>Cart</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
