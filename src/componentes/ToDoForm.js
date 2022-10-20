import React from 'react';
import {  useDispatch } from 'react-redux';
import { addCard, updateCard } from './redux/reducer/reducer';
import './ToDoForm.Style.css'


const ToDoForm = ({ update, setUpdate ,FormStatus, setFormStatus }) => {
    
    const dispatch = useDispatch()
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
            name: '',
            lastName: '',
        })
        setUpdate('add')
    }
    return (
        <div className='containerForm'>
            <form onSubmit={handleSubmit} className='Form'>
                <div className='inputForm'>
                    <input type="text" name='name' value={FormStatus.name} onChange={handleChange} placeholder='title...' required />
                    <input type="text" name='lastName' value={FormStatus.lastName} onChange={handleChange}   placeholder='dicription...' required/>
                </div>
               
               
                <div>
                <button type='submit'>
                    {update === 'add' ? <i class="fa-solid fa-plus"></i> : <i class="fa-regular fa-pen-to-square"></i>}
                </button>
                </div>
            </form>
        </div>
    );
};

export default ToDoForm;