import React, {useState}  from 'react'

const TasksContext = React.createContext();

const TasksProvider = (props) => {
    const [userTasks, setUserTasks] = useState([]);
    
    return (
      <TasksContext.Provider value={[userTasks,setUserTasks]}>
        {props.children}
      </TasksContext.Provider>
    );
  }
  
  export { TasksContext, TasksProvider };
