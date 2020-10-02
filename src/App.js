import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when app loads, listen to db and fetch new todos as they get added/removed
  useEffect(() => { //this code fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => { //every time db changes, gives you snapshot of db
      setTodos(snapshot.docs.map(doc => doc.data().todo)) //docs: every single todo added //doc: every single doc //allows us to read from db
    });

  }, []);

  const addToDo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

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
