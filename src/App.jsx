import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoItem from './components/Todo'
import { useSelector } from 'react-redux'
const App = () => {
  const todos = useSelector((state) => state.todos)
  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Redux Toolkit TodoList With LocalStorage</h1>
        <div className="mb-4">
          <AddTodo />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id}
              className='w-full'
            >
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App