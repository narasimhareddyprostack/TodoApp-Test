import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Todolists from './Components/Todolists';
import Addtodos from './Components/Addtodos';
import Updatetodos from './Components/Updatetodos';

const App = () => {
  const [todolist,settodolist] = useState([]);
  const [taskToupdate,settaskToupdate] = useState({});
  const [showmodal,setshowmodal] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/todos')
    .then((res)=>{
      settodolist(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])
  const addTask = (newTask)=>{
    settodolist([...todolist,newTask])
  }
  const removeTask = (task)=>{
    const newtodo = todolist.filter((item,index)=>{return !(item._id===task._id)})
    settodolist(newtodo)
  }
  const updateTask = (task)=>{
    const newlist = [...todolist];
        newlist.forEach((item)=>{
            if(item._id===task._id){
                item.name = task.name
                item.email = task.email
                item.number = task.number
                item.subject = task.subject
                item.message = task.message
            }
        })
        settodolist(newlist)
  }
  return (<>
    <Addtodos addTask={addTask}/>
    <Todolists todolist={todolist} removeTask={removeTask}
    taskToupdate={(task)=>{settaskToupdate(task)}}
    showPOpup={()=>{setshowmodal(!showmodal)}}/>
    {showmodal && <Updatetodos taskToupdate={taskToupdate} updateTask={updateTask}
    removePopup={()=>{setshowmodal(!showmodal)}}/>}
  </>)
}

export default App;