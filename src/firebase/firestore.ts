import { addDoc, collection } from 'firebase/firestore'
import { db } from './firebase'

const ROOMS_COLLECTION = 'rooms'
interface IRoom {
  name: string
  status: string
}

export async function addRoom(roomData: IRoom) {
  return await addDoc(collection(db, ROOMS_COLLECTION), roomData)
}
