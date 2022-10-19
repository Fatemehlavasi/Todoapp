import React,{useState} from 'react';
import ToDoCard from '../ToDoCard';
import './Home.Style.css';
import ToDoForm from '../ToDoForm';
function Home() {
    const [update, setUpdate] = useState('add')
    const[FormStatus,setFormStatus]=useState({
        id:Math.floor(Math.random()*1000),
        name:'',
        lastName:'',
        state:false
    })
    return (
        <div  className='ContainerHome'>
            <ToDoForm update={update} setUpdate={setUpdate}  FormStatus={FormStatus} setFormStatus={setFormStatus}/>
            <ToDoCard setUpdate={setUpdate} setFormStatus={setFormStatus}/>
        </div>
    );
}

export default Home;