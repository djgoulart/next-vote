import { ReactNode } from 'react'

interface ActionProps {
  children: ReactNode
}

export default function Action(props: ActionProps) {
  return <>{props.children}</>
}
