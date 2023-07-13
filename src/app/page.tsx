// import { Room } from '@/components/Room'
// import gridStyle from './page.module.css'
import HeroForm from '@/components/HeroForm'
// import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <section className="m-auto flex w-full flex-row justify-center px-4">
      {/* <div
        className={`relative mt-8 h-auto w-full gap-4 ${gridStyle.grid_template}`}
      >
        <Room name="Squad Percy" isOpen haveMembers haveOnlineMembers />
        <Room name="Squad Percy" haveMembers />
        <Room name="Squad Percy" />
      </div> */}
      {/* <HeroSection /> */}
      <HeroForm />
    </section>
  )
}
