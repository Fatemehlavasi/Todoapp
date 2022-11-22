import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { deleteCard } from './redux/reducer/reducer';
import { useDispatch } from 'react-redux';
const Delete = ({ todo }) => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    //   const handleDelet = (id) => {
    //     dispatch(deleteCard(id))
    //   }
    const handleClose = () => {
        setOpen(false);
    };
    const handledelete = id => {
        dispatch(deleteCard(id))
        setOpen(false);
    }
    return (
        <>
            <Button variant="outline" onClick={handleClickOpen} sx={{ cursor: 'pointer' }}  color={"#FFF"} >
                <DeleteIcon />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <DialogContentText >
                        Are you sure you want to delete it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>no</Button>
                    <Button onClick={() => handledelete(todo.id)} autoFocus>
                        yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default Delete