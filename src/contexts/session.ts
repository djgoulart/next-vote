import SessionRepository from '@/infrastructure/firestore/session.repository'
import { Session } from '@/models/session'
import { create } from 'zustand'

type State = {
  sessions: Session[]
}

type Action = {
  createSession: (name: string) => void
  getUserSessions: (userId: string) => void
  expireSession: (sessionId: string) => void
}

const sessionRepository = new SessionRepository()

export const useSessionStore = create<State & Action>((set) => ({
  sessions: [],
  async createSession(name) {
    await sessionRepository.createSession({ name, owner_id: '123' })
  },
  async getUserSessions(userId) {
    const sessions = await sessionRepository.getUserSessions(userId)
    set({ sessions })
  },
  async expireSession(sessionId) {
    await sessionRepository.expireSession(sessionId)
  },
}))
