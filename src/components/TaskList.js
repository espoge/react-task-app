import React from 'react'
import PropTypes from 'prop-types';

import './TaskList.css';
const TaskList = ({onComplete, tasks}) =>{
    TaskList.propTypes = {
        tasks: PropTypes.array.isRequired,
        onComplete: PropTypes.func
    }
    return (
        <section>
            {tasks.map((task,i)=> (
                <div className="row-task" key={i}>
                    <div className={task.priority === 'hight' ? 'hight-text' : (task.priority === 'medium' ? 'medium-text' : 'low-text') }>{task.title} - {task.priority}  ({task.isDone ? 'completed' : 'to complete'} )</div>
                    {!task.isDone && <button  type="button" onClick={() => onComplete(i)}>Done</button>}
                </div>
            ))}
        </section>
    )
}

/*TaskList.defaultProps = {
    tasks: [{title:'ciao'}]
   };*/

export default TaskList;
