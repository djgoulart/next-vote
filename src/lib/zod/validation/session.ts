import { SessionType } from '@/models/session'
import { Topic } from '@/models/topic'
import { z } from 'zod'

const sessionStatus = ['done', 'voting', 'waiting'] as const

const sessionSchema = z.object({
  id: z.string(),
  topics: z.instanceof(Topic).array(),
  status: z.enum(sessionStatus),
})

export default function validateSession(session: SessionType) {
  return sessionSchema.parse(session)
}
