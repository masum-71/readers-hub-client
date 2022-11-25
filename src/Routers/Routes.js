import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import SingleCategory from "../Pages/Category/SingleCategory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

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
        element: <SingleCategory></SingleCategory>,
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
]);
