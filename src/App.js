import logo from './logo.svg';
import './App.css';

//import {Footer} from "./MyComponents/Footer";
//import Todo from "./MyComponents/Todo";
import Todos from "./MyComponents/Todos";
import Todoitems from "./MyComponents/TodoItems";
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';

function App() {
  let todos = [
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
  ]
  return (
   <>
   <Header title ="My Todo List" searchBar={false} />
   <Todos todos ={todos}/>
  
   <Footer/>
     
   </>
  );
}

export default App;
