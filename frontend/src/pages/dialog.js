import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function FormDialog({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,taskname,client,department,deadline,priority,incharge}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"Update Task":"Add New Task"}</DialogTitle>
        <DialogContent>
         <form>
             <TextField id="taskname" value={taskname} onChange={e=>onChange(e)} label="Task Name" required variant="outlined" margin="dense" fullWidth />
             <TextField id="client" value={client} onChange={e=>onChange(e)} label="Client" required variant="outlined" margin="dense" fullWidth />
             <TextField id="department" value={department} onChange={e=>onChange(e)} label="Department" required variant="outlined" margin="dense" fullWidth />
             <TextField id="deadline" value={deadline} format='DD/MM/YYYY' onChange={e=>onChange(e)} type='date' required label="Deadline" variant="outlined" margin="dense" fullWidth 
               InputLabelProps={{
                shrink: true,
              }}             
             />
             <TextField id="priority" value={priority} onChange={e=>onChange(e)} label="Priority" required variant="outlined" margin="dense" fullWidth />
             <TextField id="incharge" value={incharge} onChange={e=>onChange(e)} label="Incharge" required variant="outlined" margin="dense" fullWidth />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}