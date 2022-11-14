import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCard, checkCard, checkTodo } from './redux/reducer/reducer';
import { Grid, Button, Typography } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'



const ToDoCard = ({ setUpdate, setFormStatus }) => {
  const DataTodos = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const handleDelet = (id) => {
    dispatch(deleteCard(id))
  }
  const handleUpdate = (todo) => {
    setFormStatus(todo)
    setUpdate('update')
  }

  const handleCompeleted = (id) => {
    dispatch(checkTodo(id))
  }

  const [search, setSearch] = useState('')
  const handleSearch = e => {
    setSearch(e.target.value)
  }

  return (
    <Grid container item dir={'rtl'}>
      <Grid item display={'flex'} sx={{ border: "1px solid #8888 ", borderRadius: "10px" }} xs={12} mb={2}>
        <IconButton type="button" sx={{ p: "11px" }} aria-label="جستجو">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handleSearch}
          placeholder='جستجوی عبارت مورد نظر ...'
        />
      </Grid>
      <Grid container item flexDirection={'column'}>

        {DataTodos.filter(todo => todo.title.toUpperCase().includes(search.toUpperCase())).map(todo =>
          <Grid key={todo.id} border={1} borderRadius={4} mb={2} justifyContent={"space-between"} display={"flex"} padding={"16px"} sx={{background: todo.color}}>
            <Grid >
              <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Grid>
                  <input type={'radio'} checked={todo.compeleted} onClick={() => handleCompeleted(todo.id)} />
                </Grid>
                <Grid mr={2} flexWrap={'wrap'}>
                  <Typography sx={{ textDecoration: todo.compeleted ? 'line-through' : 'unset' }}>{todo.title}</Typography>
                  <Typography>{todo.f}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{cursor: 'pointer'}}>
              <Button variant="outline" onClick={() => handleDelet(todo.id)} sx={{cursor: 'pointer'}} >
               <DeleteIcon />
              </Button>
              <Button variant="outline" onClick={() => handleUpdate(todo)} sx={{cursor: 'pointer'}} >
               <BorderColorIcon />
              </Button>
            </Grid>

          </Grid>
        )}

      </Grid>
    </Grid>
  );
};

export default ToDoCard;