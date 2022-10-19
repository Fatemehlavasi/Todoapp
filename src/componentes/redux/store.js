import { configureStore } from '@reduxjs/toolkit'
import reducerItem from './reducer/reducer'
export const store = configureStore({
  reducer: {
     todo:reducerItem,
  },
})