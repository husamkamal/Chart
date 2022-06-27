import Main from "./Screens/Main/Main";
import { Routes, Route } from "react-router-dom";
import SidBar from "./Components/SidBar/SidBar";
import { AppStyle } from "./Global.style";
import store from "./Store";
import {Provider} from "react-redux"
function App() {
  return (
    <Provider store={store}>
      <AppStyle>
        <SidBar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </AppStyle>
    </Provider>
  );
}

export default App;
