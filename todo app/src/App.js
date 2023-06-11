import React,{useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
function App() {

  // The state that will hold the todos
  const [todos, setTodos] = useState([
    {id: 'dolky4kwx', task: 'Hello', complete: false},
    {id: 'dolk04kwy', task: 'World', complete: false}
  ])

  // A function to create new todos
  const createTodo = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  // A function to remove todos
  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // A function to update todos
  const update = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, task: updatedTask}
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  // A function to mark todos as complete
  const complete = (id, completeness) => {
	const updatedTodos = todos.map((todo) => {
	  if (todo.id === id) {
	    return {...todo, complete: completeness}
	  }
	  return todo;
	});
	setTodos(updatedTodos);
   }

  // This contains all the todos to be rendered
  const todoList = todos.map((todo) => (
    <Todo 
      key={todo.id}
      todo={todo}
      update={update}
      remove={remove}
	 complete={complete}
      />
  ));

  return (
    <div className="App">
       <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <ul>{todoList}</ul>
      <TodoForm createTodo={createTodo} />
    </div>
    </div>
  );
}

export default App;
