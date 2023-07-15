import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Report from "./Pages/Report";
import Aboutpage from "./Pages/Aboutpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/aboutpage" element={<Aboutpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
