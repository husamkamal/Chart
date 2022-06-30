import { Routes, Route } from "react-router-dom";
import { AppStyle } from "./Global.style";
import store from "./Store";
import {Provider} from "react-redux"
import VerticalTabs from "./Components/SidBar/SidBar";
function App() {
  return (
    <Provider store={store}>
      <AppStyle>
        <VerticalTabs/>
        <Routes>
          <Route path="/" element={ ''} />
        </Routes>
      </AppStyle>
    </Provider>
  );
}

export default App;
