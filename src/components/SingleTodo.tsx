import { IconX } from '@tabler/icons'
import { TodoType } from '../interfaces/TodoType'
import Button from './Button'

interface Props {
  todo: TodoType
  onClick: any
  onDelete: any
}

function SingleTodo({ todo, onClick, onDelete }: Props) {
  return (
    <li
      onClick={onClick}
      className={`p-4 transition-all flex items-center justify-between border bg-gray-900 border-black/50 rounded-xl ${
        todo.isDone && 'opacity-50 border-green-500 border'
      }`}>
      <div className="flex gap-2 items-center">
        {todo.isDone ? (
          <div className="min-h-[1rem] min-w-[1rem] bg-green-500 rounded-full shadow-lg shadow-green-500" />
        ) : (
          <div className="min-h-[1rem] min-w-[1rem] bg-red-500 rounded-full shadow-lg shadow-red-500" />
        )}

        <p className="text-white">{todo.content}</p>
      </div>
      <Button className="px-2 bg-red-600/20 text-red-400 z-10" type="grow" onClick={onDelete}>
        <IconX />
      </Button>
    </li>
  )
}

export default SingleTodo
