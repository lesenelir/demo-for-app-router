'use client'

import {useState} from "react"
import TodoInput from "@/components/Todo/TodoInput"
import ShowList from "@/components/Todo/ShowList"

function TodoApp() {
  const [text, setText] = useState<string>('')
  const [todos,setTodos] = useState<string[]>([])

  return (
    <>
      <TodoInput text={text} setText={setText} todos={todos} setTodos={setTodos} />
      <ShowList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default TodoApp
