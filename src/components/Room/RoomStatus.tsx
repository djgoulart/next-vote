import * as Tooltip from '@radix-ui/react-tooltip'
import { HiOutlineStatusOnline } from 'react-icons/hi'
interface RoomStatusProps {
  isOpen?: boolean
}
export function RoomStatus(props: RoomStatusProps) {
  return (
    <div>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <a href="javascript:void(0)">
              <HiOutlineStatusOnline
                className={`h-5 w-5 ${
                  props.isOpen ? 'text-green-500' : 'text-gray-500'
                }`}
              />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="select-none rounded bg-gray-50 px-2 py-1 text-gray-800 shadow-md dark:bg-gray-900 dark:text-gray-100"
              sideOffset={5}
            >
              {props.isOpen ? 'Room is active' : 'Room is inactive'}
              <Tooltip.Arrow className="fill-gray-50 dark:fill-gray-900" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  )
}
