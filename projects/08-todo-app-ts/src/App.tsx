import { useState } from 'react'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { End } from './components/End'

import {
  type TodoId,
  type TodoState,
  type FilterValue,
  type TodoTitle
} from './types'
import { TODO_FILTERS } from './const'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]
function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const [filtersSelected, setFiltersSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = ({ id, completed }: TodoState): void => {
    const NewTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(NewTodos)
  }
  const handleFilterChange = (filter: FilterValue): void => {
    setFiltersSelected(filter)
  }
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = { id: crypto.randomUUID(), title, completed: false }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length
  const todosToRender = todos.filter((todo) => {
    if (filtersSelected === TODO_FILTERS.ALL) {
      return todo
    }
    if (filtersSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filtersSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    } else return []
  })

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={handleAddTodo} />
        <Todos
          todos={todosToRender}
          onRemoveTodo={handleRemove}
          onToggleCompleted={handleCompleted}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filtersSelected={filtersSelected}
          handleFilterChange={handleFilterChange}
          onClearCompleted={handleRemoveAllCompleted}
        />
      </div>
      <End />
    </>
  )
}

export default App
