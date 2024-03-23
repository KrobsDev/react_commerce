import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/auth/Register";
import Login from "@/pages/auth/Login";

// create the browser router out of the react component tree
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />, //root element
    children: [],
  },
]);
