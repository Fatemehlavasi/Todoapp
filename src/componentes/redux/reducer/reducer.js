
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    // { id: 1, title: "book1",f: 'arocak naz' , state: false },
    // { id: 2, title: "book2",f: 'arocak naz' , state: true },
    // { id: 3, title: "book3",f: 'arocak naz' , state: false },
    // { id: 4, title: "book4",f: 'arocak naz' , state: true },
]
export const CardSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.push(action.payload)
        },
        deleteCard: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload)
            state.splice(index, 1)
        },
        updateCard: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            state[index] = action.payload

        },
        checkCard: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload)
            state[index].state = !state[index].state

        },

        checkTodo:(state,action)=>{
            
           const index=state.findIndex(item=>item.id===action.payload)
           state[index].compeleted=!state[index].compeleted
        },
    }
});

export const { addCard, deleteCard, updateCard , checkCard , checkTodo } = CardSlice.actions
export default CardSlice.reducer