import { configureStore } from '@reduxjs/toolkit'
import reducerItem from './reducer/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import {combineReducers} from 'redux'
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  todo:reducerItem,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer:persistedReducer
     
  
})

export const persistor  = persistStore (store)
