import validatePool from '@/lib/zod/validation/pool'
import { Topic } from './topic'

type PoolStatus = 'done' | 'voting' | 'waiting'

export type PoolType = {
  id: string
  topics: Array<Topic>
  status: PoolStatus
}

export class Pool {
  constructor(values: PoolType) {
    validatePool(values)
  }
}
