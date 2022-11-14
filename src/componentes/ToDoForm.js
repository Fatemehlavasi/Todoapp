import React from 'react';
import { useDispatch } from 'react-redux';
import { addCard, updateCard } from './redux/reducer/reducer';
import { Grid, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import BorderColorIcon from '@mui/icons-material/BorderColor'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const ToDoForm = ({ update, setUpdate, FormStatus, setFormStatus, setStatus }) => {
    const dispatch = useDispatch()
    const colors = [
        {colorname: '#937DC2'}, { colorname: '#E61B23' }, { colorname: '#1A84EE'},  
        { colorname: '#091D70'},{colorname: '#FA703F'},{ colorname: '#3F71F7' }     
    ]
    const handleColor = (colorName) => {
        setFormStatus({ ...FormStatus, color: colorName })
    }

    const handleChange = e => {
        setFormStatus({ ...FormStatus, [e.target.name]: e.target.value })
    }
    const handleSubmit = event => {
        event.preventDefault()
        if (update === 'add') {
            dispatch(addCard({ ...FormStatus, id: Math.floor(Math.random() * 1000) }))
        } else {
            dispatch(updateCard(FormStatus))
        }
        setFormStatus({
            id: Math.floor(Math.random() * 1000),
            f: '',
            title: '',
        })
        setUpdate('add')
    }
    return (
        <Grid container justifyContent={'center'} alignItems={'center'} dir={'rtl'}  >
            <form onSubmit={handleSubmit}  >
                <Grid container maxWidth={'600px'} spacing={3} p={2} >
                    <Grid item xs={12} my={1} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                        <TextField name={'title'} value={FormStatus.title} onChange={handleChange} required sx={{
                            width: '80%',
                            '.css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root': { borderRadius: '16px' }
                        }} label="موضوع" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} my={1} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                        <TextField name={'f'} value={FormStatus.f} onChange={handleChange} required
                            sx={{
                                width: '80%',
                                '.css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root': { borderRadius: '16px' }
                            }}
                            label="توضیحات" variant="outlined" />
                    </Grid>
                    <Grid xs={12} my={4} display={"flex"} justifyContent={'space-around'} alignItems={'center'}>
                        {colors.map(color => (
                            <Grid >
                                <Grid style={{ width: "30px", height: '30px', borderRadius: '50%', background: color.colorname, border: FormStatus.color === color.colorname ? '1px solid #000' : 'unset' }} onClick={() => handleColor(color.colorname)} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={12} mt={2} mr={6}>
                        <Button variant='contained' type='submit' xs={12} >
                            {update === 'add' ?
                                <AddOutlinedIcon /> : <BorderColorIcon />}
                        </Button>
                  </Grid>
                </Grid>
            </form>
        </Grid>
    );
};

export default ToDoForm;