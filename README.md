---

# TodoList 

TodoList is a simple and efficient task management application built with React and Redux Toolkit. It uses `localStorage` to persist todos across sessions, ensuring your tasks are always available even after you refresh the page.

## Features

- **Add Todo**: Add new tasks to your todo list.
- **Remove Todo**: Remove tasks from your todo list.
- **Update Todo**: Edit the text of existing tasks.
- **Toggle Completed**: Mark tasks as completed or incomplete.
- **Persistent Storage**: Automatically saves and loads todos from `localStorage`.

## Project Preview
![Screenshot (811)](https://github.com/skp3214/redux-toolkit-todo-list/assets/95349420/6db502fd-67df-43b8-9617-0fec2ebc5a42)
![Screenshot (812)](https://github.com/skp3214/redux-toolkit-todo-list/assets/95349420/487fd238-cc33-4576-893a-a59d3d14474e)
![Screenshot (816)](https://github.com/skp3214/redux-toolkit-todo-list/assets/95349420/ddbdcd10-e221-4e45-9b87-9c2db3275982)
![Screenshot (817)](https://github.com/skp3214/redux-toolkit-todo-list/assets/95349420/35af7bd7-655f-45f7-882d-98908351a043)


## Getting Started

### Prerequisites

Make sure you have the following installed on your local development environment:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/skp3214/redux-toolkit-todo-list.git
   cd redux-toolkit-todo-list
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

The project structure is as follows:

```
redux-toolkit-todo/
│
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── todo/
│   │       └── todoSlice.js
│   │       
│   ├── components/
│   │   ├── TodoItem.jsx
│   │   └── AddTodo.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   
├── index.html       
├── .gitignore
├── package.json
└── README.md
```

## Usage

### Adding a Todo

1. Enter the task description in the input field.
2. Click the "Add Todo" button.

### Removing a Todo

1. Click the "X" button next to the task you want to delete.

### Updating a Todo

1. Click the "Edit" button next to the task you want to edit.
2. Modify the task description and save the changes.

### Toggling Completed

1. Click the checkbox next to the task to mark it as completed or incomplete.

## Implementation Details

### Redux Slice

The `todoSlice.js` file contains the Redux slice for managing the todo state. It includes actions for adding, removing, updating, and toggling todos. The state is persisted to `localStorage` whenever it changes.

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialState = () => {
    if (typeof window !== 'undefined') {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        return todos;
    }
}

const saveTodos = (todos) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

const initialState = {
    todos: getInitialState()
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            saveTodos(state.todos)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            saveTodos(state.todos)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if (todo) {
                todo.text = text
            }
            saveTodos(state.todos)
        },
        toggleCompleted: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
            saveTodos(state.todos)
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;

````


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

