import { HTMLAttributes } from 'react'

interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string
}
export default function Body({ text, ...otherProps }: BodyProps) {
  return (
    <p
      className="text-true-gray-500 my-6 text-xl font-light antialiased"
      {...otherProps}
    >
      {text}
    </p>
  )
}
