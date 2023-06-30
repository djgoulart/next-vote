import { Card } from '@/components/Card'

export default function Home() {
  return (
    <section className="m-auto flex w-full max-w-screen-xl flex-row justify-center">
      <div className="relative mt-8 h-auto w-full gap-4">
        <Card.Root>
          <Card.Header>
            <Card.Title text="Ola mundo" />
          </Card.Header>
          <Card.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quasi qui sint ratione possimus iure beatae animi. Quidem,
              suscipit! Unde inventore iure dolorem architecto eveniet eius
              libero, repudiandae pariatur! Vel!
            </p>
          </Card.Body>
        </Card.Root>
      </div>
    </section>
  )
}
