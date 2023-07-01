'use client'

import * as Separator from '@radix-ui/react-separator'
import { Card } from '../Card'
import { RoomMembersStatus } from './RoomMembersStatus'
import { RoomStatus } from './RoomStatus'

interface RoomProps {
  name: string
  isOpen?: boolean
  haveOnlineMembers?: boolean
  haveMembers?: boolean
}

export function Room(props: RoomProps) {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title text={props.name} className="font-semibold" />
      </Card.Header>
      <Separator.Root className="my-2 mt-10 h-px w-full bg-gray-200 dark:bg-gray-700" />
      <Card.Footer className="flex items-center justify-end gap-2">
        <RoomStatus isOpen={props.isOpen} />
        <RoomMembersStatus
          haveMembers={props.haveMembers}
          haveOnlineMembers={props.haveOnlineMembers}
        />
      </Card.Footer>
    </Card.Root>
  )
}
