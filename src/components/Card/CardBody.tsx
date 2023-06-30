import { HTMLAttributes } from 'react'

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export default function CardBody(props: CardBodyProps) {
  return <div {...props} />
}
