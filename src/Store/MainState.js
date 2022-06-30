import { createSlice } from "@reduxjs/toolkit"
const initialMain={month:"November",reservations:[{number:66,name:"الحجوزات",month:'November'},{number:32,name:" الحجوزات قيد التنفيذ",month:'November'},{number:34,name:" الحجوزات السابقة",month:'November'},{number:'2000 ريال',name:" المدفوعات",month:'November'}],chartDataPoint : [
    {label: "November",value: 50,},
    {label: "November",value: 60,},
    {label: "November",value: 70,},
    {label: "November",value: 80,},
  ]}
const MonthSlice=createSlice({
    name:'Month',
    initialState:initialMain,
    reducers:{
        MonthName(state,action){state.month = action.payload.target.value},
    }
})

export default MonthSlice;
export  const actionMonth=MonthSlice.actions
