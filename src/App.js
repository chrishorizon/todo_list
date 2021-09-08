import React, {useState} from "react";
import Todo from './components/Todo'
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState(''); // inputs
  const [todos, setTodos] = useState([]); // saves inputs

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if(newTodo == 0){
      return;
    }

    // Creates an object of key value pair dictionary 
    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]) // spread operator takes an array on the right side of ... and separates it by individual items and put into a new array and , one last item added on the end
    setNewTodo("");
  }

  // Creating Delete function
  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos)
  }

  // return every todo unchanged except the one that was changed
  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if(idx == i){
        const updatedTodo = {...todo, complete: !todo.complete};
        return updatedTodo;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div style={{ textAlign: "center"}}>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }}
        type="text"
        value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
        
        {/* Displaying input info */}
      {todos.map((todo, i) => {
        return <Todo key={i} i={i} todo={todo} handleToggleComplete={handleToggleComplete} handleTodoDelete={handleTodoDelete} />
        })}
        
    </div>
  );
}

export default App;
