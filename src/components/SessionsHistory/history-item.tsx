import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'

type HistoryItemStatus = 'done' | 'voting' | 'waiting'

interface HistoryItemProps {
  title: string
  createdAt: Date
  members: number
  tasks: number
  points: number
  status: HistoryItemStatus
}

export function HistoryItem() {
  return (
    <Card className="transition-all hover:brightness-110">
      <CardHeader>
        <CardTitle>Planning Squad Percy</CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="flex w-full flex-wrap gap-4">
          <div className="flex items-center gap-1">
            <p className="text-sm">Created:</p>
            <p className="text-sm text-muted-foreground">2 hours ago</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm">Participants:</p>
            <p className="text-sm text-muted-foreground">5</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm">Tasks Voted:</p>
            <p className="text-sm text-muted-foreground">20</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm">Points:</p>
            <p className="text-sm text-muted-foreground">93</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm">Status:</p>
            <p className="text-sm text-muted-foreground">closed</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
