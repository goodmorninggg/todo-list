import React from 'react'
import { TodoItems } from './TodoItems'

 const Todos = (props) => {
  console.log(props.todos)
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.map((todos)=>{
        return <TodoItems todos={todos} onDelete={props.onDelete}/>
      })}
      
    </div>
  )
}

export default Todos


