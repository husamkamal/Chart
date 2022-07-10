import { createSlice } from "@reduxjs/toolkit"
const initialBookStute={stute:'الكل'}
const StuteSlice=createSlice({
    name:'stute',
    initialState:initialBookStute,
    reducers:{
        stute(state,action){state.stute=action.payload.target.value}
    }
})
export default StuteSlice;
export const actionStute=StuteSlice.actions;