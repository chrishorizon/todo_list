import React, {useState} from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState(''); // inputs
  const [todos, setTodos] = useState([]); // saves inputs

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]) // spread operator takes an array on the right side of ... and separates it by individual items and put into a new array and , one last item added on the end
  }

  return (
    <div style={{ textAlign: "center"}}>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} type="text" />
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default App;
