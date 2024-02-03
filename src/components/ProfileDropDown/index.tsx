"use client"
import { useAuthStore } from '@/contexts/auth'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

export default function ProfileDropDown() {
  const [user, logout] = useAuthStore(state => [state.user, state.logout])
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          width={32}
          height={32}
          className="w-8 h-8 rounded-full cursor-pointer"
          src={user?.picture_url === null ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff" : user?.picture_url ?? ""}
          alt="user photo"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className='cursor-pointer' onClick={() => logout()}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
