import React from 'react';
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';

function Todo(props) {
  return (

    <List>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
      </ListItem>
    </List>

  )
}

export default Todo;
