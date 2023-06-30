import Room from '@/components/Room'
import './page.css'
export default function Home() {
  return (
    <div
      className="
      relative
      h-full 
      px-8 
      cards_template 
      gap-4
      mt-8"
    >
      <Room title="My personal room" isOpen />
    </div>
  )
}
