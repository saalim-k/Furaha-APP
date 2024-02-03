import { signOut } from '@/auth'
import { PowerIcon } from '@heroicons/react/24/outline'

export default function SignOut() {
  const handleSignOut = async (event: any) => {
    event.preventDefault()
    await signOut()
  }

  return (
    <form onSubmit={handleSignOut}>
      <button
        type="submit"
        className="flex items-center space-x-1 hover:text-red-300"
      >
        <PowerIcon className="w-4" />
        <div className="hidden md:block">Sign Out</div>
      </button>
    </form>
  )
}
