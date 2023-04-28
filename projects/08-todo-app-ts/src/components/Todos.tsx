import { type TodoId, type ListOfTodos, type TodoState } from '../types'
import { Todo } from './Todo'
interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: TodoState) => void
}
export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleted
}: Props) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={() => {
              onRemoveTodo({ id: todo.id })
            }}
            onToggleCompleted={() => {
              onToggleCompleted({ id: todo.id, completed: !todo.completed })
            }}
          />
        </li>
      ))}
    </ul>
  )
}
