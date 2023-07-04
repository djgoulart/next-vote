import { Member } from '@/models/member'
import { RoomType } from '@/models/room'
import { z } from 'zod'

const roomStatus = ['open', 'closed'] as const

const roomSchema = z.object({
  id: z.string(),
  name: z.string(),
  members: z.instanceof(Member).array(),
  status: z.enum(roomStatus),
  configuration: z.object({
    voting_choices: z.string().array(),
  }),
})

export default function validateRoom(room: RoomType) {
  return roomSchema.parse(room)
}
