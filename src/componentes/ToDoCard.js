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
              <input className='input-search'  value={search} onChange={handleSearch} placeholder='Search New User...' />
          </div>
            {DataTodos.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase())).map(todo=>
               <div key={todo.id}  className='ToDoCarditem'>
                <div className='ToDoitem' >
                <h3>{todo.id}</h3>
                 <h3>{todo.name}</h3>
                 <h3>{todo.lastName}</h3>
                 <h3 onClick={() => handelCheck(todo.id)} style={{cursor:'pointer'}}>
                    {todo.state ? 'Favorite' : ' unFavorite'}
                 </h3>
                </div>
                <div className='btmToDoitem'>
                  <button onClick={()=>handleDelet(todo.id)} className='btnToDo'>
                      delete
                  </button>
                  <button onClick={()=>handleUpdate(todo)} className='btnToDo'>
                    update
                  </button>
                </div>
                 
               </div>
            )} 
        </div>
    );
};

export default ToDoCard;