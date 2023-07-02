import { Room } from '@/components/Room'
import gridStyle from './page.module.css'

export default function Home() {
  return (
    <section className="m-auto flex w-full max-w-screen-xl flex-row justify-center">
      <div
        className={`relative mt-8 h-auto w-full gap-4 ${gridStyle.grid_template}`}
      >
        <Room name="Squad Percy" isOpen haveMembers haveOnlineMembers />
        <Room name="Squad Percy" haveMembers />
        <Room name="Squad Percy" />
      </div>
    </section>
  )
}
