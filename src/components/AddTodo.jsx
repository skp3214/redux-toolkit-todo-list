import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setinput] = useState("")
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if(input){

      dispatch(addTodo(input));
    }
    setinput("");
  }
  return (
    <div>
      <form onSubmit={addTodoHandler} className=" flex">
        <input
          type="text"
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo;