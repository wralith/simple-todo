import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import Button from './components/Button'
import Input from './components/Input'
import SingleTodo from './components/SingleTodo'
import Space from './components/Space'
import { TodoType } from './interfaces/TodoType'
import { IconChecks } from '@tabler/icons'

function App() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [todoInput, setTodoInput] = useState<string>('')
  const [animateTodos] = useAutoAnimate<HTMLUListElement>()

  const addTodo = (s: string) => {
    setTodos([...todos, { content: s, isDone: false }])
  }

  const handleIsDone = (s: string) => {
    const temp: TodoType[] = [...todos]
    temp.map(todo => (todo.content == s ? (todo.isDone = !todo.isDone) : todo))
    setTodos(temp)
  }

  const handleDelete = (s: string) => {
    setTodos(todos.filter(todo => todo.content != s))
  }

  return (
    <div className="min-h-screen bg-gray-600 py-4">
      <div className="group p-4 mb-4 flex m-auto w-full justify-center gap-4">
        <IconChecks size={35} className="text-green-500 group-hover:text-gray-900 transition-colors" />
        <h1 className=" text-3xl text-gray-900 group-hover:text-green-500 font-bold transition-colors">Todo App</h1>
      </div>
      <div className="px-4 py-8 lg:w-3/4 xl:w-1/2 bg-gray-700/50 min-h-[45rem] mx-2 lg:mx-auto rounded-xl flex flex-col flex-auto justify-start items-center">
        <div className="p-4 flex justify-center w-3/4 bg-gray-800/50 rounded-md border-black/50 border">
          <Input placeholder="Add your todo!" value={todoInput} onChange={(e: any) => setTodoInput(e.target.value)} />
          <Button type="slide" onClick={() => addTodo(todoInput)}>
            Send
          </Button>
        </div>
        <Space height="md" />
        <div className="p-4 bg-gray-800/50 rounded-md border-black/50 border w-3/4 overflow-y-auto max-h-[40rem]">
          <ul className="flex flex-col gap-2" ref={animateTodos}>
            {todos.map(todo => (
              <SingleTodo
                todo={todo}
                key={todo.content}
                onClick={() => handleIsDone(todo.content)}
                onDelete={() => handleDelete(todo.content)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
