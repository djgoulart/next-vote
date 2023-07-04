import validateTopic from '@/lib/zod/validation/topic'
import { Vote } from './vote'

export type TopicStatusType = 'skypped' | 'done' | 'voting' | 'waiting'

export type TopicType = {
  id: string
  name: string
  votes: Array<Vote>
  result: number
  order: number
  status: TopicStatusType
}

export class Topic {
  constructor(values: TopicType) {
    validateTopic(values)
  }
}
