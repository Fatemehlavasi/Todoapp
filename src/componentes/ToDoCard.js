import React , {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteCard , checkCard } from './redux/reducer/reducer';
import './ToDoCart.Style.css'


const ToDoCard = ({setUpdate,setFormStatus}) => {
    const DataTodos =useSelector(state=>state.todo)
    const dispatch=useDispatch()
    
    const handleDelet= (id)=>{
       dispatch(deleteCard(id))
    }
    const handleUpdate =(todo)=>{
        setFormStatus(todo)
        setUpdate('update')
    }

    // const handelCheck = id => {
    //   (checkCard.map(todo => todo.id === id ? { ...todo, state: !todo.state } : todo))
    // }
    const handelCheck=(id)=>{
      dispatch(checkCard(id))
  }
  const [search, setSearch] = useState('')
  const handleSearch = e =>{
    setSearch(e.target.value)
 }
    
    return (
        <div className='ContainerToDo'> 
          <div  className='search' >
            <div className='IconSearch'>
              <i class="fa-solid fa-magnifying-glass" ></i>
            </div>
              <input className='input-search'  value={search} onChange={handleSearch} placeholder='Search New User...'  />
          </div>
          <div className='datamain'>
       
            {DataTodos.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase())).map(todo=>
               <div key={todo.id}  className='ToDoCarditem'>
                  <div className='ToDoitem' >
                    {/* <p>{todo.id}</p> */}
                    <div className='ToDoCardTitel'>
                    <p>{todo.name}</p>
                    <p>{todo.lastName}</p>
                    </div>
                    <div>
                    <p onClick={() => handelCheck(todo.id)} style={{cursor:'pointer'}}>
                        {todo.state ? <i class="fa-solid fa-heart text-danger" style={{color:'red'}} ></i> : <i  class="fa-regular fa-heart " ></i>}
                    </p>
                    </div>
                  </div>
                  <div className='btmToDoitem'>
                      <button onClick={()=>handleDelet(todo.id)} className='btnToDo'>
                          <i class="fa-solid fa-trash"></i>
                      </button>
                      <button onClick={()=>handleUpdate(todo)} className='btnToDo'>
                          <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                  </div>
                  
               </div>
            )} 
     
          </div>
        </div>
    );
};

export default ToDoCard;