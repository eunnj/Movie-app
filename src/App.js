import Button from "./Button"
import styles from "./App.module.css"
import { useState,useEffect } from "react";


function App() {
  const [toDo,setToDo] = useState("");
  const[toDos,setToDos]=useState([]);
  const onChange=(event)=>setToDo(event.target.value);
  const onSubmit=(event)=>{
    event.preventDefault();
    if(toDo===""){
        return;
    }
     
     setToDos(CurrentArray=>[toDo,...CurrentArray]);
     setToDo("");
  };
  console.log(toDos)
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}  
      </ul>
    </div>
  );
}

export default App;
