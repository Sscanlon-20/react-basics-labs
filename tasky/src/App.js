import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", description: "Pick up and put away all clothes, shows and toys", deadline: "Today" },
      { id: 4, title: "Do the floors", description: "Sweep, Hoover and wash all floors", deadline: "Today" },
      { id: 5, title:"Make beds", description: "Change all cheets and duvet covers", deadline: "Tomorrow" },
    ]
  });


  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
    />
  ))}

    </div>
  );

}

export default App;

