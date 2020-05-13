import React, {useContext } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import {TasksContext} from './TasksContext'
import './Tasks.css'

const Tasks = props =>{
    console.log(props)
    const [userTasks, setUserTasks] = useContext(TasksContext);

    const addTask = task =>{
        
        setUserTasks(prevTask => [
            ...prevTask,{isDone:false,...task }
          ]);
    }
   /* const addTask = task =>{
        const newTask = [...userTasks,{isDone:false,...task }]
        setTasks(newTask)
    }*/
    
    const completedTask = index =>{
        let updateTask = [...userTasks]
        updateTask[index].isDone = true
        setUserTasks(updateTask) //operazione atomica

    }

    return (
        <div className="task-container">
            <TaskForm onAddTask={addTask} />
            <TaskList tasks={userTasks} onComplete={completedTask}/>
        </div>
        )
}

export default Tasks;
