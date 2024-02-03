import { ModeToggle } from '../ui/toggle-mode'
import { MainNav } from './main-nav'
import Search from '@/components/molecules/search'

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 max-w-4xl mx-auto">
        <MainNav className="mx-6" />
        <div className="flex-grow" />
        <div className="mr-2">
          <Search placeholder="Search ..." />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
