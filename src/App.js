import React from 'react';
import Tasks from './components/Tasks'
//import TasksReducer from './components/TasksReducer'
import {TasksProvider} from './components/TasksContext'

import './App.css';

const App = props => {
   return  (
    <TasksProvider>
          <Tasks />
    </TasksProvider>
  )
  //return <TasksReducer />
}

export default App;
