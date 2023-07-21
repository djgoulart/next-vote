import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'

export function ActiveSession() {
  return (
    <>
      <h3 className="text-md my-4 font-semibold">Active</h3>
      <Card className="bg-slate-800">
        <CardHeader>
          <CardTitle>Planning Squad Percy</CardTitle>
        </CardHeader>
        <CardFooter>
          <div className="flex w-full flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <p className="text-sm">Created:</p>
              <p className="text-sm text-muted-foreground">15 minutes ago</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm">Participants:</p>
              <p className="text-sm text-muted-foreground">5</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm">Tasks:</p>
              <p className="text-sm text-muted-foreground">20</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm">Points:</p>
              <p className="text-sm text-muted-foreground">93</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm">Status:</p>
              <p className="text-sm text-green-600">active</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}
