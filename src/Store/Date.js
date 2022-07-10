import { createSlice } from "@reduxjs/toolkit"
const initialDate={date:new Date()}

const DateSlice=createSlice({
    name:'date',
    initialState:initialDate,
    reducers:{
        date(state,action){state.date = action.payload.target.value},
    }
})

export default DateSlice;
export  const actionDate=DateSlice.actions
