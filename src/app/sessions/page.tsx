import { ActiveSession } from '@/components/ActiveSession'
import { CreateSession } from '@/components/CreateSession'
import { SessionsHistory } from '@/components/SessionsHistory'
import { Card, CardContent } from '@/components/ui/card'

export default function Sessions() {
  return (
    <section className="m-auto flex w-full flex-row justify-center px-4">
      <div className="mt-10 w-full max-w-7xl text-left">
        <section className="my-8">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">Voting Sessions</h2>
            <CreateSession />
          </div>
          <p className="my-4">
            You can create as many voting sessions as you want, and access your
            history for 3 months
          </p>
        </section>

        <Card>
          <CardContent>
            <ActiveSession />
            <SessionsHistory />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
