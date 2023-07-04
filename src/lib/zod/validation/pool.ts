import { PoolType } from '@/models/pool'
import { Topic } from '@/models/topic'
import { z } from 'zod'

const poolStatus = ['done', 'voting', 'waiting'] as const

const poolSchema = z.object({
  id: z.string(),
  topics: z.instanceof(Topic).array(),
  status: z.enum(poolStatus),
})

export default function validatePool(pool: PoolType) {
  return poolSchema.parse(pool)
}
