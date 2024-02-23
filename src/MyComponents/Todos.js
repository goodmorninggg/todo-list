import React from 'react'
import { TodoItems } from './TodoItems'

 const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  console.log(props.todos)
  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length===0? <p>No todos to display</p>:
      props.todos.map((todos)=>{
        return (
          <>
        <TodoItems todo={todos} key={todos.sno}  onDelete={props.onDelete}/><hr/>
        </>
        )
      })  
    }
    </div>
  )
}

export default Todos


