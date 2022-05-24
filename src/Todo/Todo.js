import React from 'react'
import './Todo.css'

function Todo(props) {
  let id, text, time, date;
  ({id, text, time, date } = props.todo)
  
  return (
    <div>
        <span> {time} </span>
        <span> {text} </span>
        <button> edit </button>
        <button> delete </button>
    </div>
  );
}

function Todos (props) {
  console.log("Helo")
  console.log(props.todos)
  return (
  <div>
      {props.todos.map((todo) => (<Todo key = {todo.id} todo = {todo}></Todo> ))}
  </div>
  
  );
}
  
  export default Todos