import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function HeroForm() {
  return (
    <div className="lg:2/6 mt-20 text-left lg:ml-16 lg:mt-40 xl:w-2/4">
      <h1 className="text-4xl font-bold leading-none antialiased sm:text-6xl">
        {"Let's create your voting room"}
      </h1>
      <h4 className="text-true-gray-500 mt-6 text-xl font-light antialiased">
        A better experience for you and your team while planning tasks.
      </h4>
      <div className="mt-4 flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Choose a name" className="h-12" />
        <Button type="submit">Create</Button>
      </div>
    </div>
  )
}
