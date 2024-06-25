import AddTodo from "./Component/AddTodo"
import AppName from "./Component/AppName"
import Todoitem1 from "./Component/Todoitem1";
import Todoitem from "./Todoitem"
import "./App.css";

function App() {
  

  return (
   
      <center className='todo-container'>
       <AppName />
           <AddTodo />

           <div className="items-container">
           <Todoitem />
           <Todoitem1 />

           </div>
       



   
    </center>
  );
}

export default App;
