import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>hello world</h1>
      <input></input>
      <button>Add Todo</button>

      <ul>
        <li>Take dogs for a walk</li>
        <li>Take trash out</li>
      </ul>

    </div>
  );
}

export default App;
