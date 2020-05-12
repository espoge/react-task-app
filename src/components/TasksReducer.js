import React, {useReducer} from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import './Tasks.css'
const taskReducer = (currentTask, action) =>{
    switch(action.type){
        case 'ADD':
            return [...currentTask, action.task];
        case 'UPDATE':
            return action.tasks
        default:
        throw new Error('Should not get there!');
    }
}
const TasksReducer = props =>{
    const [userTasks, dispatch] = useReducer(taskReducer, []);
    const addTask = task =>{
        dispatch({
            type: 'ADD',
            task: { isDone:false,...task}
        })
    }
    const completedTask = index =>{
        let updateTask = [...userTasks]
        updateTask[index].isDone = true
        dispatch({
            type:'UPDATE',
            tasks: updateTask
        })
    }
    return (
        <div className="task-container">
            <TaskForm onAddTask={addTask}/>
            <TaskList tasks={userTasks} onComplete={completedTask}/>
        </div>
        )
}

export default TasksReducer;
