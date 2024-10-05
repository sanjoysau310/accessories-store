import { createBrowserRouter } from "react-router-dom";
//import { PrivateRoutes } from "./privateRoutes";
import { RootLayout } from "../components/RootLayout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // public routes
      {
        path: "",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   element: <PrivateRoutes />,
      //   children: [{ path: "", element: <Cart /> }],
      // },
    ],
  },
]);
