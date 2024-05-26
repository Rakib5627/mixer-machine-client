import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layouts/Main";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
    ]
  },
]);


export default router;