import { HeroSection } from '@/components/HeroSection'

export default function Home() {
  return (
    <section className="m-auto flex w-full max-w-screen-xl flex-row justify-center px-4 md:p-8">
      <HeroSection.Root>
        <HeroSection.Heading text={"Let's create your room!"} />
        <HeroSection.Body
          text={'You are about to experiencing an awesome planning session.'}
        />
      </HeroSection.Root>
    </section>
  )
}
