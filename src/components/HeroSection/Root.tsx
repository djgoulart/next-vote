import { HTMLAttributes, ReactNode } from 'react'

interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Root(props: RootProps) {
  return (
    <div
      className="lg:2/6 mt-20 text-left lg:ml-16 lg:mt-40 xl:w-2/4"
      {...props}
    />
  )
}
