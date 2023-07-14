'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
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
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

export default function HeroForm() {
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
      name: randomName,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="lg:2/6 mt-20 text-left lg:ml-16 lg:mt-40 xl:w-2/4">
      <h1 className="text-4xl font-bold leading-none antialiased sm:text-6xl">
        {"Let's create your voting room"}
      </h1>
      <h4 className="text-true-gray-500 mt-6 text-xl font-light antialiased">
        A better experience for you and your team while planning tasks.
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
                          placeholder="Choose a name"
                          className="h-[50px] w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-2 pl-1" />
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
