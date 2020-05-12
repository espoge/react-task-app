import React, {useState} from 'react'
import './TaskForm.css'

const TaskForm = props =>{
    const [inputTask, setinputTask] = useState('')
    const [inputPriority, setInputPriority] = useState('hight')
    const priorityList = ['hight','medium','low']
    const inputHandler = event =>{
        event.preventDefault();
        props.onAddTask({title:inputTask, priority:inputPriority})
        setinputTask('')
    }
    return(
        <form onSubmit={inputHandler}>
            <div className="input-control"> 
            <label>Task Title
                <input type="text" value={inputTask} onChange={e => setinputTask(e.target.value)} />
            </label>
            <label>Priority
                <select onChange={e => setInputPriority(e.target.value)} value={inputPriority}>
                    {priorityList.map((priority,i)=>(
                        <option key={i} value={priority}>{priority}</option>
                    ))}
                </select>  
            </label>
           </div>
           <div className="button-control"> 
            <button type="submit">Submit</button>  
            </div>
        </form>
    )
}

export default TaskForm