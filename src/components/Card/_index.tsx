import { PiUsers } from 'react-icons/pi'
type RoomProps = {
  title: string
  isOpen?: boolean
  hasLoggedMembers?: boolean
}
export default function Room(props: RoomProps) {
  const { title, isOpen, hasLoggedMembers } = props

  return (
    <div className="flex w-full justify-center">
      <a
        href="#"
        className="
        block 
        w-full 
        max-w-sm
        rounded-lg border 
        border-gray-200 
        bg-white 
        px-6 
        py-4 
        shadow 
        transition-all 
        hover:bg-gray-100 
        dark:border-gray-700 
        dark:bg-gray-800
        dark:hover:bg-gray-700"
      >
        <div className="flex gap-2">
          <h5
            className="mb-2 
            text-2xl 
            font-bold 
            tracking-tight 
            text-gray-900 
            dark:text-white"
          >
            {title}
          </h5>
          <span className="relative flex h-3 w-3">
            <span
              className={`absolute inline-flex h-full w-full animate-pulse rounded-full opacity-75 ${
                isOpen ? ' bg-green-500' : ' bg-gray-500'
              }`}
            ></span>
            <span
              className={`relative inline-flex h-3 rounded-full w-3${
                isOpen ? 'bg-green-500' : 'bg-gray-500'
              }`}
            ></span>
          </span>
        </div>
        <div className="mt-4 flex justify-end">
          <PiUsers
            className={`${
              hasLoggedMembers ? 'text-green-500' : 'text-gray-500'
            } h-5 w-5`}
          />
        </div>
      </a>
    </div>
  )
}
