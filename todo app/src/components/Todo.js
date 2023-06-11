import React, { useState } from 'react'
import './Todo.css'

const Todo = ({todo,remove,update,complete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    // A function to toggle the form for editing and non-editing
    const toggleFrom = () => {
        setIsEditing(!isEditing);
    }

    // A function to handle the remove button
    const handleClick = (e) => {
        remove(todo.id);
    };

    // A function to handle the update button
    const handleUpdate = (e) => {
        e.preventDefault();
        update(todo.id,task);
        toggleFrom();
    };

    // A function to handle the complete button
    const handleComplete = (e) => {
	   e.preventDefault();
	   complete(todo.id,!todo.complete);
        setTask(task);
    };

    // A function to handle the change in the input field
    const handleChange = (e) => {
        setTask(e.currentTarget.value);
    };

    // Result is the object that need to be rendered but conditionally
    let result;
    // If isEditing is true, render the form for editing
    if (isEditing) {
        result = (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input onChange={handleChange} value={task} type="text" />
                    <button>Save</button>
                </form>
            </div>
        );
    }
    // If isEditing is false, render the todo card
    else {
        result = (
            <div className="Todo">
			<section className="Left-section">
				<div className="Todo-buttons">
					<button onClick={handleComplete} >
						<i className={`far fa${todo.complete ? "-check" : ""}-circle`} />
					</button>
				</div>
				<li
					id={todo.id}
					className={`Todo-task ${todo.complete ? "completed" : ""}`}
				>
					{todo.task}
				</li>
			 </section>
                <div className="Todo-buttons">
                    <button onClick={toggleFrom}>
                        <i className="fas fa-pen" />
                    </button>
                    <button onClick={handleClick}>
                        <i id={todo.id} className="fas fa-trash" />
                    </button>
                </div>
            </div>
        )
    }
    return result;
}

export default Todo
