import { configureStore } from '@reduxjs/toolkit'
import MonthSlice from './MainState'
const store=configureStore({reducer:MonthSlice.reducer})
export default store