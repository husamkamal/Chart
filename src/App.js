import Main from "./Screens/Main/Main";
import { Routes, Route} from "react-router-dom";
import SidBar from "./Components/SidBar/SidBar";
import { AppStyle } from "./Global.style";
function App() {
  return (
    <AppStyle>
      <SidBar />
      <Routes>
         <Route path="/" element={<Main />} />
       </Routes>
     </AppStyle>
  );
}

export default App;
