import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";

// create the browser router out of the react component tree
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />, //root element
    children: [],
  },
]);
