import { SESSION_COLLECTION } from '@/firebase/firestore'
import { db } from '@/lib/firebase/firebase'
import {
  Session,
  SessionRepositoryInterface,
  SessionType,
} from '@/models/session'
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'

export default class SessionRepository implements SessionRepositoryInterface {
  async getUserSessions(userId: string): Promise<Session[]> {
    const q = await query(
      collection(db, SESSION_COLLECTION),
      where('owner_id', '==', userId),
    )
    const sessionsDoc = await getDocs(q)
    const sessionsResponse: Session[] = []
    sessionsDoc.forEach((doc) => {
      sessionsResponse.push(new Session(doc.data() as SessionType))
    })

    return sessionsResponse
  }

  async createSession(session: Partial<Session>): Promise<void> {
    await addDoc(collection(db, SESSION_COLLECTION), session)
  }

  async expireSession(id: string): Promise<void> {
    const session = await doc(db, SESSION_COLLECTION, id)
    if (session) {
      await updateDoc(session, { status: 'expired' })
    }
  }

  getSessionById(id: string): Promise<Session> {
    throw new Error('Method not implemented.')
  }
}
