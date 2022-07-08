import { configureStore } from '@reduxjs/toolkit'
import MonthSlice from './MainState'
import SidBarSlice from './SidBarRedux'
const store=configureStore({reducer:{Month:MonthSlice.reducer,sidBar:SidBarSlice.reducer}})
export default store