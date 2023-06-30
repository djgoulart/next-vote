import { HTMLAttributes } from 'react'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function CardHeader(props: CardHeaderProps) {
  return <div {...props} />
}
