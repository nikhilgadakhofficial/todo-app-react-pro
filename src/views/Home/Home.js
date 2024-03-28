import React, { useEffect, useState } from 'react'
import './Home.css'
import add from "./add.png"
import TaskCard from '../../Components/TaskCard/TaskCard';

function Home() {
    const [tasks , setTasks] = useState([ ]);
    const [newTask, setNewTask] = useState();
    const [error,SetError] = useState('')
    const [catergor,SetCatergor] = useState('');

    const addTask = ()=>{
         if(newTask === ''){
         SetError('Please enter a task')
       return
}
else if(newTask.length < 5){
    SetError('Task Should be at least 5 characters long')
    return
}
else{
    SetError('')
}
setTasks([
    {
    title : newTask,
    catergor : catergor
}
,...tasks])
setNewTask('')
    }
    
    const deleteTask = (index)=>{
       const newTasks = tasks;
       newTasks.splice(index,1);
       setTasks([...newTasks]);
       localStorage.setItem('tasks',JSON.stringify(newTasks))
    }
    useEffect(()=>{
        if(tasks.length === 0){
            return
        }

        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

    useEffect(()=>{
        const tasks =localStorage.getItem('tasks');
        if(tasks){
            setTasks(JSON.parse(tasks));
        }
    },[])
    
  return (
    <div className='card'>
        <h1 className='app-hading'>ToDo App</h1>

        <div className='tasks-containar'>
            {
                tasks.map((task,i)=>{
                    const {title,catergor} =task;
         return <TaskCard title={title} catergor={catergor} key={i} delFunetion={deleteTask}
         index={i}/>
                })
            }

        </div>
        <p className='task-hading'>{error}</p>
        <div className='input-container'>
           
            <input type='text' placeholder='Add a new task' className='input-task' 
            value={newTask}
            onChange={(e)=>{
              setNewTask(e.target.value)
            }}/>
            <select className='btn-card' value={catergor} onChange={(e)=> SetCatergor(e.target.value)} >
            <option value=''>Catergor</option>
                <option value='Study'>Study</option>
                <option value='Shopping'>Shopping</option>
                <option value='Goals'>Goals</option>
                <option value='Hobby'>Hobby</option>
            </select>
           <img src={add} alt='Add' className='icon' onClick={addTask}/>
        </div>
    </div>
  )
}

export default Home