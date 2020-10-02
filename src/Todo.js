import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {

  const [open, setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen(true);
  }
  return (
    <>
    <Modal
      open={open}
      onClose={e => setOpen(false)}
    >
      <div>
        <h1>i am a modal</h1>
        <button onClick={e => setOpen(false)}></button>
      </div>
    </Modal>

    <List>
      <ListItem>
        <ListItemAvatar> 
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
      </ListItem>
      <button onClick={e => setOpen(true)}>Edit</button>
      <DeleteForeverIcon onClick={event => { db.collection('todos').doc(props.todo.id).delete()} } />
    </List>
    </>
  )
}

export default Todo;
