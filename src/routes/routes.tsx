import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// create the browser router out of the react component tree
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //root element
    children: [],
  },
]);
