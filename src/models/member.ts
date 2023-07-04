import validateMember from '@/lib/zod/validation/member'

type MemberRoles = 'owner' | 'spectator' | 'voter'

type MemberStatus = 'offline' | 'online'

export type MemberType = {
  id: string
  role: MemberRoles
  status: MemberStatus
}

export class Member {
  constructor(values: MemberType) {
    validateMember(values)
  }
}
