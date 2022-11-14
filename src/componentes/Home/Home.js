import React, { useState } from 'react';
import ToDoCard from '../ToDoCard';
import { Grid } from '@mui/material';
import ToDoForm from '../ToDoForm';

function Home() {
    const [update, setUpdate] = useState('add')
    const [FormStatus, setFormStatus] = useState({
        id: Math.floor(Math.random() * 1000),
        title: '',
        discription: '',
        state: false
    })
    return (
        <Grid container justifyContent={'center'} sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <Grid item p={1} width={'800px'}>
                <ToDoForm update={update} setUpdate={setUpdate} FormStatus={FormStatus} setFormStatus={setFormStatus} />
                <ToDoCard setUpdate={setUpdate} setFormStatus={setFormStatus} />
            </Grid>
        </Grid>
    );
}

export default Home;