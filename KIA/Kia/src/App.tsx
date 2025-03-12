import { Route, Routes } from "react-router";
import Inspection from "./Pages/Inspection";
import Kia from "./Pages/Kia";
import About from "./Pages/About";
import Detail from "./Pages/Detail";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Inspection />} />
      <Route path={"/kia"} element={<Kia />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/detail/:id"} element={<Detail />} />
    </Routes>
  );
}

export default App;
