import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import SingleCategory from "../Pages/Category/SingleCategory";
import Home from "../Pages/Home/Home";

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
    ],
  },
]);
