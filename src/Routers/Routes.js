import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../Dashboard/AllSeller/AllSeller";

import MyOrders from "../Dashboard/MyOrders/Myorders";
import MyProducts from "../Dashboard/MyProducts/MyProducts";
import Report from "../Dashboard/Repoet/Report";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main/Main";
import SingleCategory from "../Pages/Category/SingleCategory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <SingleCategory></SingleCategory>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/categories/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allseller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/allbuyer",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/report",
        element: <Report></Report>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
