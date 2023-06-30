import { HTMLAttributes } from 'react'

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string
}
export default function CardTitle({ text, ...otherProps }: CardTitleProps) {
  return <h3 {...otherProps}>{text}</h3>
}
