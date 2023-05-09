import "./App.scss";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/Home";
import Header from "./component/Header";
import RockScissorsPaper from "./page/RockScissorsPaper";
import NumberBaseball from "./page/NumberBaseball";
import GuessingNumbers from "./page/GuessingNumbers";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rockScissorsPaper" element={<RockScissorsPaper />} />
        <Route path="/numberBaseball" element={<NumberBaseball />} />
        <Route path="/guessingNumbers" element={<GuessingNumbers />} />
      </Routes>
    </div>
  );
}

export default App;
