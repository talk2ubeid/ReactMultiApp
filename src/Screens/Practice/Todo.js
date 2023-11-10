import React,{useState} from "react";
import "../Practice/todo.css"
const Todo = () => {

  const [data,setData]=useState([])
  const [todo,setTodo]=useState()
  const handleAddTask=()=>{
    if (!todo.trim()){
      alert("Please Enter the Task")
  }else{
    setData([...data,todo])
    setTodo(" ")
    
  }
  
  }
  const handleRemove=(ele)=>{
    const filtered=data.filter((item)=>item!==ele)
    setData([...filtered])
  }
  console.log(data)
  return (
    <div className="Parent" >
      <div className="firstChild">
      <div className="taskbar">
          <input onChange={(e)=>setTodo(e.target.value)} value={todo} />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <div className="TaskAdded">
        {data.map((ele,key)=>
        <div className="taskContent">
          <div id="srNo">{key+1}</div>
          <div id="task"><span>{ele}</span></div>
          <button onClick={()=>handleRemove(ele)}>Delete Task</button>
          </div>)}
      </div>
      </div>
      
    </div>
  );
};

export default Todo;
