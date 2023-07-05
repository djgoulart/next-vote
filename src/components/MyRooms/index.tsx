import { Room } from '@/components/Room'
import gridStyle from './my-rooms.module.css'

export default function MyRooms() {
  return (
    <div
      className={`relative mt-8 h-auto w-full gap-4 ${gridStyle.grid_template}`}
    >
      <Room name="Squad Percy" isOpen haveMembers haveOnlineMembers />
      <Room name="Squad Percy" haveMembers />
      <Room name="Squad Percy" />
    </div>
  )
}
