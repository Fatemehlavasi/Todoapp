
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, name: "book1", state: false, lastName: 'arocak naz' },
    { id: 2, name: "book2", state: true, lastName: 'arocak naz' },
    { id: 3, name: "book3", state: false, lastName: 'arocak naz' },
    { id: 4, name: "book4", state: true, lastName: 'arocak naz' },
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
    }
});

export const { addCard, deleteCard, updateCard , checkCard } = CardSlice.actions
export default CardSlice.reducer