import validateRoom from '@/lib/zod/validation/room'
import { Member } from './member'

type RoomConfiguration = {
  voting_choices: Array<string>
}

type RoomStatus = 'open' | 'closed'

export type RoomType = {
  id: string
  name: string
  members: Array<Member>
  status: RoomStatus
  configuration: RoomConfiguration
}

export class Room {
  constructor(values: RoomType) {
    validateRoom(values)
  }
}
