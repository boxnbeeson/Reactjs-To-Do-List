import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <TodoList />
      <input type="text" />
      <button>Add Item</button>
      <button>Clear completed items</button>
      <div> Items left to complete: 0</div> 
    </div>
  );
}

export default App;
