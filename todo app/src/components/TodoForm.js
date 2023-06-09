import React,{useState} from 'react'
import './TodoForm.css'
const TodoForm = ({createTodo}) => {
    const [userInput, setUserInput] = useState('');

    // A function to handle the change in the input field
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    // A function to handle the submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        // create a new todo object
        const newTodo = {
            id: Math.random().toString(36).substr(2,9),
            task: userInput,
            complete: false
        }
        // add the new todo to the state in App.js
        createTodo (newTodo);
        // reset the input form
        setUserInput('');
    }
    
  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
        value={userInput}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  )
}

export default TodoForm
