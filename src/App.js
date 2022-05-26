import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct/AddProduct";
import "./App.css";
import EachTool from "./Components/EachTool/EachTool";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import More from "./Components/More/More";
import Navbar from "./Components/Navbar/Navbar";
import AddNewProduct from "./Components/NestedRoutes/AddNewProduct/AddNewProduct";
import ManageOrders from "./Components/NestedRoutes/ManageOrders/ManageOrders";
import ManageProducts from "./Components/NestedRoutes/ManageProducts/ManageProducts";
import ManageUsers from "./Components/NestedRoutes/ManageUsers/ManageUsers";
import Orders from "./Components/NestedRoutes/Orders/Orders";
import Profile from "./Components/NestedRoutes/Profile/Profile";
import Review from "./Components/NestedRoutes/Review/Review";
import Register from "./Components/Register/Register";
import RequireUser from "./Components/RequireAuth/RequireUser"



function App() {
  return <div>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/more" element={<More></More>}>
      <Route index element={<Profile></Profile>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="orders" element={<RequireUser><Orders></Orders>
          </RequireUser>}></Route>
          <Route path='manageUsers' element={<ManageUsers></ManageUsers>}></Route>
          <Route path='addProduct' element={<AddNewProduct></AddNewProduct>}></Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='manageOrders' element={<ManageOrders></ManageOrders>}></Route>
      </Route>
      
      <Route path="/logIn" element={<LogIn></LogIn>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/home/:eachTool" element={<RequireUser><EachTool></EachTool></RequireUser>}></Route>
    </Routes>
  </div>
}

export default App;
