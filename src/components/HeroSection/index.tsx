import { Button } from '../ui/button'

export default function HeroSection() {
  return (
    <div className="lg:2/6 mt-20 text-left lg:ml-16 lg:mt-40 xl:w-2/4">
      <h1 className="text-6xl font-semibold leading-none">
        We made an awesome planning poker
      </h1>
      <h4 className="text-true-gray-500 mt-6 text-xl font-light antialiased">
        A better experience for you and your team while planning tasks.
      </h4>
      <Button className="mt-6 rounded-sm px-8 py-4 font-normal tracking-wide outline-none transition duration-200 ease-in-out focus:outline-none">
        Start for free
      </Button>
    </div>
  )
}
