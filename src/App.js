import React,{useState}from 'react';
import './App.css';
import todosData from "./todosData"
import Todos from "./Todos"

function App() {
  const[todo,setTodo] = useState([])

  function handleChange(id){
    console.log("clicked",id)

  }
  const todoItems = todosData.map((todo)=>(<Todos key={todo.id} item={todo} handleChange={handleChange}/>))
  return (
    <div className="todo-list">
    {todoItems}
    </div>
  );
}

export default App;
