import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div>
            <span> 22:00 </span>
            <span> 일정 입니다. </span>
            <button> edit </button>
            <button> delete </button>
        </div>
        
      );
    }
  }

class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <Todo/>
            <Todo/>
            <Todo/>
        </div>
        
        );
    }
}
  
  export default Todos