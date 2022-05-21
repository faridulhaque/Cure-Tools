import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/logIn" element={<LogIn></LogIn>}></Route>
    </Routes>
  </div>
}

export default App;
