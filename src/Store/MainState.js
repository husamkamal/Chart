import { createSlice } from "@reduxjs/toolkit"
const initialMain={month:""}
const MonthSlice=createSlice({
    name:'Month',
    initialMain,
    reducers:{
        MonthName(state,action){state.month= action.payload}
    }
})
export default MonthSlice;
export  const actionMonth=MonthSlice.actions
