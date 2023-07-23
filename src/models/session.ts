import { Topic } from './topic'

export type SessionStatus = 'done' | 'voting' | 'waiting' | 'expired'

export type SessionType = {
  id: string
  topics: Array<Topic>
  status: SessionStatus
  owner_id: string
  name: string
}

export class Session {
  props: SessionType

  constructor(values: SessionType) {
    this.props = values
  }

  get name() {
    return this.props.name
  }

  get owner_id() {
    return this.props.owner_id
  }

  get id() {
    return this.props.id
  }

  get status() {
    return this.props.status
  }
}

export interface SessionRepositoryInterface {
  createSession(session: Partial<Session>): Promise<void>
  expireSession(id: string): Promise<void>
  getSessionById(id: string): Promise<Session>
  getUserSessions(userId: string): Promise<Session[]>
}
