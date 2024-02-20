import React from 'react'
import { TodoItems } from './TodoItems'

 const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
      {/*props.todos*/}
      <TodoItems todos={props.todos[0]}/>
      
    </div>
  )
}

export default Todos


