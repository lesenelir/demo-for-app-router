interface IProps {
  text: string,
  setText: (text: string) => void,
  todos: string[],
  setTodos: (todos: string[]) => void
}

function TodoInput(props: IProps) {
  const {text, setText, todos, setTodos} = props

  return (
    <>
      <label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button
          className={'ml-2 rounded-xl bg-amber-200 p-2'}
          onClick={() => {
            setTodos([text,...todos])
          }}
        >
          Add
        </button>
      </label>
    </>
  )
}

export default TodoInput
