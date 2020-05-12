import React, {useState} from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import './Tasks.css'
const Tasks = props =>{
    const [userTasks,setTasks] = useState([])
    const addTask = task =>{
        setTasks(prevTask => [
            ...prevTask,{isDone:false,...task }
          ]);
    }
    const completedTask = index =>{
        let updateTask = [...userTasks]
        updateTask[index].isDone = true
        setTasks(updateTask)
    }
    return (
        <div className="task-container">
            <TaskForm onAddTask={addTask}/>
            <TaskList tasks={userTasks} onComplete={completedTask}/>
        </div>
        )
}

export default Tasks;
