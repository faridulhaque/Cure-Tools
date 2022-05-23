import { Route, Routes } from "react-router-dom";
import "./App.css";
import EachTool from "./Components/EachTool/EachTool";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import More from "./Components/More/More";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";

function App() {
  return <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/more" element={<More></More>}></Route>
      
      <Route path="/logIn" element={<LogIn></LogIn>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/home/:eachTool" element={<EachTool></EachTool>}></Route>
    </Routes>
  </div>
}

export default App;
