import React from 'react'

export const TodoItems = ({todos,onDelete}) => {
  return (
    <div>
        <h4>{todos.title}</h4>
        <p>{todos.desc}</p>
        <button className= "btn  btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
    </div>
  )
}

//export default TodoItems
