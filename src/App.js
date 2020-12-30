import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/dist/v4'

const LOCAL_STORAGE_KEY = 'taskAPP.tasks'

function App() {
  const [allTasks, updateTasks] = useState([]);
  const taskInput = useRef();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) updateTasks(storedTasks)
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allTasks))}, [allTasks]);
  
  function toggleTaskCheckbox(id) {
    const copiedTasks = [...allTasks];
    const task = copiedTasks.find(task => task.id === id)
    task.complete = !task.complete;
    updateTasks(copiedTasks);
  };  

  function addNewTask(e) {
    const name = taskInput.current.value;
    if (name === '') return null; 
      updateTasks(previousTasks => {
      return [...previousTasks, { id: uuidv4(), name: name, complete: false}]});
    taskInput.current.value = null;
  };

  function clearCheckedTasks() {
    const incompleteTasks = allTasks.filter(task => !task.complete);
    updateTasks(incompleteTasks);
  }

  return (
    <div>
      <TodoList tasks={allTasks} toggleTask={toggleTaskCheckbox}/>
      <input ref={taskInput} type="text" />
      <button onClick={addNewTask}>Add Task</button>
      <button onClick={clearCheckedTasks}>Clear completed tasks</button>
      <div> Tasks left to complete: {allTasks.filter(task => !task.complete).length}</div> 
    </div>
  );
}

export default App;
