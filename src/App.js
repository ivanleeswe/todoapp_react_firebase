import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take trash out', 'Jump rope']);
  const [input, setInput] = useState('');

  const addToDo = (event) => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello world!</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <Button type="submit" onClick={addToDo} variant="contained" color="primary">Add Todo</Button>
      </form>


      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        )) }
      </ul>

    </div>
  );
}

export default App;
