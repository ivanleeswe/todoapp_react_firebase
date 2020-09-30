import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take trash out', 'Jump rope']);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>hello world!</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        )) }
      </ul>

    </div>
  );
}

export default App;
