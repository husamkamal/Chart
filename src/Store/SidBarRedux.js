import { createSlice } from "@reduxjs/toolkit";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import GppGoodIcon from "@mui/icons-material/GppGood";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const initialSidBar = {sidBar:[
  { name: "الرئيسية", icon: <WidgetsIcon style={{padding:"0 .5rem"}}  />, path: "/" },
  { name: "الحجوزات", icon: <ArticleIcon style={{padding:"0 .5rem"}} />, path: "/reservations" },
  { name: "المستخدمين", icon: <PersonIcon style={{padding:"0 .5rem"}} />, path: "/users" },
  { name: "الموظفين", icon: <GppGoodIcon style={{padding:"0 .5rem"}} />, path: "/employees" },
  { name: "اماكن الحجز", icon: <LocationOnIcon style={{padding:"0 .5rem"}} />, path: "/location" },
  { name: "تسجيل الخروج", icon: <ExitToAppIcon style={{padding:"0 .5rem"}} />, path: "/exit" },
]};

const SidBarSlice = createSlice({
  name: "sidBar",
  initialState: initialSidBar,
  reducers: {
    date(state){state.sid=state.sidBar}
  },
});
export default SidBarSlice;
export const actionSid=SidBarSlice.actions
