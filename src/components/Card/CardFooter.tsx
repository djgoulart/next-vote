import { HTMLAttributes } from 'react'

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function CardFooter(props: CardFooterProps) {
  return <div {...props} />
}
