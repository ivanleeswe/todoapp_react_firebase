import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo'

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

        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addToDo} variant="contained" color="primary">Add Todo</Button>
      </form>


      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        )) }
      </ul>

    </div>
  );
}

export default App;
