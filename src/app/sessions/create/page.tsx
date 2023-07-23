'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Command } from 'lucide-react'
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function Create() {
  const [randomName] = useState(
    uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      length: 2,
    }),
  )
  const formSchema = z.object({
    name: z.string().min(3).max(200),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  function onCreateTask(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <section className="m-auto flex w-full flex-row justify-center px-4">
      <div className="mt-10 w-full max-w-7xl text-left">
        <Card>
          <CardHeader>
            <CardTitle>Create a new voting session</CardTitle>
            <CardDescription className="pt-1">
              Give a name for your session or pick one randomly generated.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="mt-2 flex w-full max-w-lg items-center">
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
                              autoComplete="off"
                              autoCorrect="off"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-2 pl-1" />
                        </div>
                        <div className="!mt-0">
                          <Button type="submit" className="!mt-0 h-12">
                            <p>Create</p>
                          </Button>
                          <div className="mt-2 flex items-center">
                            <Command className="ml-2 h-4 w-4 text-muted-foreground transition-all" />
                            <p className="ml-2 text-sm text-muted-foreground">
                              Enter
                            </p>
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        <Separator className="my-8" />
        <Card>
          <CardHeader>
            <CardTitle>Add tasks to be voted</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onCreateTask)}>
                <div className="mt-4 flex w-full max-w-lg items-center">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex w-full items-start gap-4">
                        <div className="w-full">
                          <FormControl>
                            <Input
                              placeholder="My awesome feature to be voted ..."
                              className="h-[50px] w-full"
                              autoComplete="off"
                              autoCorrect="off"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-2 pl-1" />
                          <FormDescription className="mt-2 pl-1">
                            Give a name for the task
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
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
