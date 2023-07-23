'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSessionStore } from '@/contexts/session'

export default function HeroForm() {
  const { sessions, createSession, getUserSessions } = useSessionStore()
  const [randomName] = useState(
    uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      length: 2,
    }),
  )
  const formSchema = z.object({
    name: z.string().min(3).max(50),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  useEffect(() => {
    // TODO: Set user id when implement login
    getUserSessions('123')
  }, [getUserSessions])

  function onSubmit(values: z.infer<typeof formSchema>) {
    createSession(values.name)
  }

  return (
    <div className="lg:2/6 mt-20 text-left lg:ml-16 lg:mt-40 xl:w-2/4">
      <h1 className="text-4xl font-bold leading-none antialiased sm:text-6xl">
        {"Let's vote!"}
      </h1>
      {sessions.map((session) => {
        return (
          <div key={session.id}>
            {session.status === 'expired' ? (
              <del>{session.name}</del>
            ) : (
              session.name
            )}
          </div>
        )
      })}

      <h4 className="text-true-gray-500 mt-6 text-xl font-light antialiased">
        Create your first voting session and start planning your tasks.
      </h4>
      <div className="mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-4 flex w-full max-w-lg items-center">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex w-full items-start gap-4">
                    <div className="w-full">
                      <FormControl>
                        <Input
                          placeholder={randomName}
                          className="h-[50px] w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-2 pl-1" />
                      <FormDescription className="mt-2 pl-1">
                        Give a name for your session or pick one randomly
                        generated.
                      </FormDescription>
                    </div>
                    <Button type="submit" className="!mt-0 h-12">
                      Create
                    </Button>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
