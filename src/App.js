import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RockScissorsPaper from "./page/RockScissorsPaper";
import Header from "./component/Header";
import MultiplicationTable from "./page/MultiplicationTable";
import NumberBaseball from "./page/NumberBaseball";

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rock" element={<RockScissorsPaper />} />
        <Route path="/multi" element={<MultiplicationTable />} />
        <Route path="/numberBaseball" element={<NumberBaseball />} />
      </Routes>
    </div>
  );
}

export default App;
