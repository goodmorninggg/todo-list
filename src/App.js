//import logo from './logo.svg';
import './App.css';

//import {Footer} from "./MyComponents/Footer";
//import Todo from "./MyComponents/Todo";
import Todos from "./MyComponents/Todos";
//import Todoitems from "./MyComponents/TodoItems";
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import React, { useState } from "react";
import { AddTodos } from './MyComponents/AddTodos';

function App() {
  const onDelete = (todo)=>{
    console.log("i am on delete of todos",todo);
    setTodos(todos.filter((e)=>{
    return e!==todo;
    }));
  }
  const addTodo = (title,desc) =>{
    console.log("i am adding this todo ",title,desc)
    let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo])
    console.log(myTodo);
  }
  
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "go to the market",
      desc: "you need to go to the market to get the job done"
    },
    {
      sno: 2,
      title: "go to the ghat",
      desc: "you need to go to the market to get the job done"
    },
    {
      sno: 3,
      title: "go to the mall",
      desc: "you need to go to the market to get the job done"
    },
  ]);
  
  return (
   <>
   <Header title ="My Todo List" searchBar={false} />
   <AddTodos addTodo={addTodo} />
   <Todos todos ={todos} onDelete={onDelete}/>
  
   <Footer/>
     
   </>
  );
}

export default App;
