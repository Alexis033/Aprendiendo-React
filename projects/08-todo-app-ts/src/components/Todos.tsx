import { type ListOfTodos } from '../types'

interface Props {
  todos: ListOfTodos
}
export function Todos({ todos }: Props): React.ReactElement<Props> {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
