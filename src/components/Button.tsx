import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  type?: 'default' | 'slide' | 'grow'
  onClick?: any
}

function Button({ children, className, type, onClick }: Props) {
  let typeString = null

  if (type == 'slide') {
    typeString = '-translate-x-2 hover:translate-x-2'
  }
  if (type == 'grow') {
    typeString = 'hover:scale-125'
  }

  return (
    <button
      onClickCapture={onClick}
      className={`py-2 px-10 text-black hover:text-white bg-green-500 hover:bg-red-500 active:bg-red-600 transition-all rounded-md shadow-md shadow-gray-900/30 ${typeString} ${className}`}>
      {children}
    </button>
  )
}

export default Button
