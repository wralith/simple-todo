interface Props {
  className?: string
  placeholder?: string
  value?: string
  onChange?: any
}

function Input({ className, placeholder, value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`p-2 rounded-md focus:bg-white bg-gray-300 hover:bg-gray-200 transition-all focus:outline-none focus:shadow-xl shadow-gray-900 min-w-[5rem] ${className}`}
    />
  )
}

export default Input
