import { Topic } from '@/models/topic'
import { Vote } from '@/models/vote'
import zod, { z } from 'zod'

const TopicStatusValues = ['skipped', 'done', 'voting', 'waiting'] as const

const topicSchema = zod.object({
  name: z.string().max(2),
  status: z.enum(TopicStatusValues),
  id: z.string(),
  order: z.number(),
  result: z.number(),
  votes: z.instanceof(Vote).array(),
})

export default function validateTopic(topic: Topic) {
  return topicSchema.parse(topic)
}
