import { MemberType } from '@/models/member'
import { z } from 'zod'

const memberRoles = ['owner', 'spectator', 'voter'] as const
const memberStatus = ['offline', 'online'] as const

const memberSchema = z.object({
  id: z.string(),
  role: z.enum(memberRoles),
  status: z.enum(memberStatus),
})

export default function validateMember(member: MemberType) {
  return memberSchema.parse(member)
}
