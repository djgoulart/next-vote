import * as Tooltip from '@radix-ui/react-tooltip'
import { FaUsers, FaUsersSlash } from 'react-icons/fa'
interface RoomMembersStatusProps {
  haveOnlineMembers?: boolean
  haveMembers?: boolean
}
export function RoomMembersStatus(props: RoomMembersStatusProps) {
  return (
    <div>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <a href="">
              {props.haveMembers && (
                <FaUsers
                  className={`h-5 w-5 ${
                    props.haveOnlineMembers ? 'text-green-500' : 'text-gray-500'
                  }`}
                />
              )}

              {!props.haveMembers && (
                <FaUsersSlash className="h-5 w-5 text-gray-500" />
              )}
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="select-none rounded bg-gray-50 px-2 py-1 text-gray-800 shadow-md dark:bg-gray-900 dark:text-gray-100"
              sideOffset={5}
            >
              {props.haveMembers ? 'Room with members' : 'Empty Room'}
              <Tooltip.Arrow className="fill-gray-50 dark:fill-gray-900" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  )
}
