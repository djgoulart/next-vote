import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export default function Button({ asChild, ...otherProps }: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return <Component {...otherProps} />
}
