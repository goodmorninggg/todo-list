import React from 'react'
import { TodoItems } from './TodoItems'

 const Todos = (props) => {
  console.log(props.todos)
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length===0? <p>No todos to display</p>:
      props.todos.map((todos)=>{
        return <TodoItems todos={todos} key={todos.sno}  onDelete={props.onDelete}/>
      })  
    }
    </div>
  )
}

export default Todos


