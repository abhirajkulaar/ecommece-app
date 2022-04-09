
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react'
function ReviewForm({visibility, setVisibility, onSubmit}) {

  const handleClose = () => {
    setVisibility(false);
  };

  const [title,setTitle] = useState()
  const [description,setDescription] = useState()
  const [rating,setRating] = useState()

  const onSubmitForm = () => {
      debugger
      onSubmit({title,description,rating:3.5});
      handleClose();
  }
  return (
    <div>

      <Dialog open={visibility} onClose={handleClose}>
        <DialogTitle>Review</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            fullWidth
            variant="standard"
            value={title}
            onChange={(param)=>setTitle(param.target.value)}
          />

        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            fullWidth
            variant="standard"
            value={description}
            onChange={(param)=>setDescription(param.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmitForm}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReviewForm