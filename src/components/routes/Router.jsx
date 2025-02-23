import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layouts/Main";
import Machine from "../Home/Machine";
import AddMachine from "../AddMachine/AddMachine";
import ErrorPage from "../ErrorPage/ErrorPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
      {
          path: '/machine01',
          element: <Machine></Machine>
      }, 
      {
          path: '/add-machine',
          element: <AddMachine></AddMachine>
      }, 
    ]
  },
]);


export default router;