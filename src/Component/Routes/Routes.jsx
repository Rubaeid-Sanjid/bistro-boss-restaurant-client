import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Main/Main";
import Menu from "../../Pages/Menu/Menu";
import Order from "../../Pages/Order/Order";
import Login from "../../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/menu", element: <Menu></Menu> },
      { path: "/order/:category", element: <Order></Order> },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);
