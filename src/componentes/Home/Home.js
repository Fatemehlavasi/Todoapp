import React, { useState } from 'react';
import ToDoCard from '../ToDoCard';
import { Grid  ,Button , Typography} from '@mui/material';
import ToDoForm from '../ToDoForm';
// import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import { Link } from 'react-router-dom';
import SinglePage from '../../Page/SinglePage';
function Home() {
    const [update, setUpdate] = useState('add')
    const [FormStatus, setFormStatus] = useState({
        id: Math.floor(Math.random() * 1000),
        title: '',
        discription: '',
        state: false
    })
    return (
        <Grid  container mt={5} justifyContent={'center'} sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <Grid item p={1} width={'800px'} >
            <Grid  mt={5} dir={"rtl"}  mr={2}>
        <Link to={`/AddContact`}>
          <Button 
            sx={{
              bgcolor: "primary.dark",
              width: "150px",
              color: "common.white",
              borderRadius: 2,
              "&:hover": {
                bgcolor: "common.white",
                color: "primary.dark",
                border: "1px solid",
                borderColor: "primary.dark",
              },
            }}
          >
           
            <Typography ml={2} fontSize={"14px"} sx={{ cursor: "pointer" }}>
              کار جدید
            </Typography>
          </Button>
        </Link>
      </Grid>
                <ToDoForm update={update} setUpdate={setUpdate} FormStatus={FormStatus} setFormStatus={setFormStatus} />
                <ToDoCard setUpdate={setUpdate} setFormStatus={setFormStatus} />
                {/* <SinglePage setUpdate={setUpdate} setFormStatus={setFormStatus} /> */}
            </Grid>
        </Grid>
    );
}

export default Home;