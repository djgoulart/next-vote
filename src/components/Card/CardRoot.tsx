import { HTMLAttributes, ReactNode } from 'react'

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export default function CardRoot(props: CardRootProps) {
  return (
    <div
      {...props}
      className="
        block 
        w-full 
        max-w-sm
        rounded-lg 
        border 
        border-gray-200 
        bg-white 
        px-6 
        py-4 
        shadow 
        transition-all 
        hover:bg-gray-100 
        dark:border-gray-700 
        dark:bg-gray-800
        dark:hover:bg-gray-700"
    />
  )
}
