import React from 'react'
import './TaskList.css';
const TaskList = props =>{
    
    return (
        <section>
            {props.tasks.map((task,i)=> (
                <div className="row-task" key={i}>
                    <div className={task.priority === 'hight' ? 'hight-text' : (task.priority === 'medium' ? 'medium-text' : 'low-text') }>{task.title} - {task.priority}  ({task.isDone ? 'completed' : 'to complete'} )</div>
                    <button className={task.isDone ? 'hide-button' :  'show-button'} type="button" onClick={()=>props.onComplete(i)}>Done</button>
                </div>
            ))}
        </section>
    )
}

export default TaskList;
