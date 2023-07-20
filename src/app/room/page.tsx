import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Room() {
  return (
    <section className="m-auto flex w-full flex-row justify-center px-4">
      <div className="mt-10 w-full max-w-7xl text-left">
        <section className="my-8">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">Voting Sessions</h2>
            <Button>Create</Button>
          </div>
          <p className="my-4">
            You can create as many voting sessions as you want, and access your
            history for 3 months
          </p>
        </section>

        <Card>
          <CardContent>
            <h3 className="text-md my-4 font-semibold">Active</h3>
            <Card className="bg-slate-800">
              <CardHeader>
                <CardTitle>Planning Squad Percy</CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="flex w-full flex-wrap gap-4">
                  <div className="flex items-center gap-1">
                    <p className="text-sm">Created:</p>
                    <p className="text-sm text-muted-foreground">
                      15 minutes ago
                    </p>
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
                    <p className="text-sm text-green-600 text-muted-foreground">
                      active
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <h3 className="text-md my-4 font-semibold">History</h3>
            <ScrollArea className="h-[400px] w-full pr-2">
              <div className="flex flex-col gap-1">
                <Card className="transition-all hover:brightness-110">
                  <CardHeader>
                    <CardTitle>Planning Squad Percy</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex w-full flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <p className="text-sm">Created:</p>
                        <p className="text-sm text-muted-foreground">
                          2 hours ago
                        </p>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Planning Squad Percy</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex w-full flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <p className="text-sm">Created:</p>
                        <p className="text-sm text-muted-foreground">
                          2 hours ago
                        </p>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Planning Squad Percy</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex w-full flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <p className="text-sm">Created:</p>
                        <p className="text-sm text-muted-foreground">
                          2 hours ago
                        </p>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Planning Squad Percy</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex w-full flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <p className="text-sm">Created:</p>
                        <p className="text-sm text-muted-foreground">
                          2 hours ago
                        </p>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Planning Squad Percy</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex w-full flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <p className="text-sm">Created:</p>
                        <p className="text-sm text-muted-foreground">
                          2 hours ago
                        </p>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Planning Squad Percy</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex w-full flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <p className="text-sm">Created:</p>
                        <p className="text-sm text-muted-foreground">
                          2 hours ago
                        </p>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Planning Squad Percy</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex w-full flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <p className="text-sm">Created:</p>
                        <p className="text-sm text-muted-foreground">
                          2 hours ago
                        </p>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Planning Squad Percy</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex w-full flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <p className="text-sm">Created:</p>
                        <p className="text-sm text-muted-foreground">
                          2 hours ago
                        </p>
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
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
