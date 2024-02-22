import React, { useState } from 'react'

export const AddTodos = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("title and description cannot be blank");
        }
        AddTodos(title, desc);

    }
    
  return (
    <div className="container my-3">
        <h3>add a todo</h3 >
        <form onSubmit={submit}>
  <div classNameName="mb-3">
    <label for="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-primary btn-success">Add Todo</button>
</form>
      
    </div>
  )
}

 //default AddTodos