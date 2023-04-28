import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: () => void
  onToggleCompleted: () => void
}
export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleted
}: Props) => {
  return (
    <div className="view">
      <input
        id={id}
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <label htmlFor={id}> {title}</label>
      <button className="destroy" onClick={onRemoveTodo} />
    </div>
  )
}
