import React, {useState} from 'react';
// dummy data
import data from "./data.json";
// components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import './App.css';
import Parent from './Parent';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task =>{
      return task.id === Number(id) ? { ...task, complete: !task.complete} : { ...task};
    });
    setToDoList(mapped);
  }
  
  const handleFilter = () => {
    let filtered = toDoList.filter(task =>{
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length+1, task: userInput, complete: false}];
    setToDoList(copy);
}
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask} />
      <Parent />
    </div>
  );
}

export default App;
