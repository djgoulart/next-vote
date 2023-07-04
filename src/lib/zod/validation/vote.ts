import { VoteType } from '@/models/vote'
import { z } from 'zod'
import { Member } from '../../../models/member'

const voteSchema = z.object({
  id: z.string(),
  owner: z.instanceof(Member),
  value: z.number().positive(),
})

export default function validateVote(vote: VoteType) {
  return voteSchema.parse(vote)
}
