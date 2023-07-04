import validateVote from '@/lib/zod/validation/vote'
import { Member } from './member'

export type VoteType = {
  id: string
  owner: Member
  value: number
}

export class Vote {
  constructor(values: VoteType) {
    validateVote(values)
  }
}
