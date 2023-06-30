import { PiUsers } from 'react-icons/pi'
type RoomProps = {
  title: string
  isOpen?: boolean
  hasLoggedMembers?: boolean
}
export default function Room(props: RoomProps) {
  const { title, isOpen, hasLoggedMembers } = props

  return (
    <div className="w-full flex justify-center">
      <a
        href="#"
        className="block w-full max-w-sm px-6 py-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
              className={`animate-pulse absolute h-full w-full rounded-full opacity-75 inline-flex ${
                isOpen ? ' bg-green-500' : ' bg-gray-500'
              }`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-3 w-3${
                isOpen ? 'bg-green-500' : 'bg-gray-500'
              }`}
            ></span>
          </span>
        </div>
        <div className="mt-4 flex justify-end">
          <PiUsers
            className={`${
              hasLoggedMembers ? 'text-green-500' : 'text-gray-500'
            } w-5 h-5`}
          />
        </div>
      </a>
    </div>
  )
}
