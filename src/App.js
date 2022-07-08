import { Routes, Route } from "react-router-dom";
import { AppStyle } from "./Global.style";
import store from "./Store";
import {Provider} from "react-redux"
import VerticalTabs from "./Components/SidBar/SidBar";
import Main from "./Screens/Main/Main"
// import ReservationsContentScreen from "./Screens/ReservationsContentScreen/ReservationsContentScreen"
import SidBar from "./Components/SidBar/SidBar";
function App() {
  return (
    <Provider store={store}>
    <AppStyle>
      <SidBar/>
      <Routes>
        <Route path="/" element={ <Main/>} />
        {/* <Route path="/reservations" element={ <ReservationsContentScreen/>} /> */}
      </Routes>
    </AppStyle>
  </Provider>
  );
}

export default App;
