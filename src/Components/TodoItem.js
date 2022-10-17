import React from 'react'

export const TodoItem = ({todo}) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.desc}</p>
    </div>
  )
}


export default TodoItem