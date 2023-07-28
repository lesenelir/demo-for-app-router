import {useState} from "react"

interface IProps {
  todos: string[]
  setTodos: (todos: string[]) => void
}

function ShowList(props: IProps) {
  const {todos, setTodos} = props
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [modifyText, setModifyText] = useState<string>('')

  return (
    <>
      <ul>
        {todos.map((item, index) => (
          <li key={index} className={'flex flex-row gap-4 w-1/4'}>
            {isEdit ? <input type="text" value={modifyText} onChange={(e) => setModifyText(e.target.value)}/> : item}
            <button onClick={(e) => {
              if (isEdit) {
                // 修改
                const newTodos = todos.map(todo => todo !== item ? todo : modifyText)
                setTodos(newTodos)
              }
              setIsEdit(!isEdit)
            }}>{isEdit ? 'yes' : 'modify'}</button>
            <button onClick={() => isEdit ? setIsEdit(!isEdit) : setTodos(todos.filter(todo => todo !== item))}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ShowList
