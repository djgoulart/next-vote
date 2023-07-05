import Button from '@/components/Button'
import { HeroSection } from '@/components/HeroSection'

export default function Home() {
  return (
    <section className="m-auto flex w-full max-w-screen-xl flex-row justify-center px-4 md:p-8">
      <HeroSection.Root>
        <HeroSection.Heading text={"Let's create your room!"} />
        <HeroSection.Body
          text={'You are about to experiencing an awesome planning session.'}
        />
        <HeroSection.Action>
          <Button
            asChild
            className="rounded-full bg-gradient-to-b from-blue-600 to-blue-700 px-8 py-4 font-normal tracking-wide text-white outline-none transition duration-200 ease-in-out hover:from-blue-700 hover:shadow-lg focus:outline-none"
          >
            <a href="">Create your free voting room</a>
          </Button>
        </HeroSection.Action>
      </HeroSection.Root>
    </section>
  )
}
