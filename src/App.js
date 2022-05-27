import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Blog from "./Components/Blog/Blog";
import EachTool from "./Components/EachTool/EachTool";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import More from "./Components/More/More";
import MyPortfolio from "./Components/MyPortfolio/MyPortfolio";
import Navbar from "./Components/Navbar/Navbar";
import AddNewProduct from "./Components/NestedRoutes/AddNewProduct/AddNewProduct";
import ManageOrders from "./Components/NestedRoutes/ManageOrders/ManageOrders";
import ManageProducts from "./Components/NestedRoutes/ManageProducts/ManageProducts";
import ManageUsers from "./Components/NestedRoutes/ManageUsers/ManageUsers";
import Orders from "./Components/NestedRoutes/Orders/Orders";
import Profile from "./Components/NestedRoutes/Profile/Profile";
import Review from "./Components/NestedRoutes/Review/Review";
import NotFound from "./Components/NotFound/NotFound";
import Payment from "./Components/Payment/Payment";
import Register from "./Components/Register/Register";
import RequireAdmin from "./Components/RequireAuth/RequireAdmin";
import RequireUser from "./Components/RequireAuth/RequireUser";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar></Navbar>
      <Routes>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/more" element={<More></More>}>
          <Route index element={<RequireUser><Profile></Profile></RequireUser>}></Route>
          <Route path="review" element={<RequireUser><Review></Review></RequireUser>}></Route>
          <Route
            path="orders"
            element={
              <RequireUser>
                <Orders></Orders>
              </RequireUser>
            }
          ></Route>

          <Route path="payment/:id" element={<RequireUser><Payment></Payment></RequireUser>}></Route>
          <Route
            path="manageUsers"
            element={<RequireUser><ManageUsers></ManageUsers></RequireUser>}
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireUser>
                <AddNewProduct></AddNewProduct>
              </RequireUser>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={<RequireUser><ManageProducts></ManageProducts></RequireUser>}
          ></Route>
          <Route
            path="manageOrders"
            element={<RequireUser><ManageOrders></ManageOrders></RequireUser>}
          ></Route>
        </Route>

        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/home/:eachTool"
          element={
            <RequireUser>
              <EachTool></EachTool>
            </RequireUser>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
