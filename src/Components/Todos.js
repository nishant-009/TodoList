import React from 'react'
import TodoItem from '../Components/TodoItem';

const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todo's List</h3>
      {/*{props.todos}*/}

      <TodoItem todo = {props.todos[2]}/>

    </div>
  )
}

export default Todos
