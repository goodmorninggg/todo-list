import React from 'react'

export const TodoItems = (todos) => {
  return (
    <div>
        <h4>{todos.title}</h4>
        <p>{todos.desc}</p>
    </div>
  )
}

//export default TodoItems
