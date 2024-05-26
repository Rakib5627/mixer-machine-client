import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layouts/Main";
import Recipes from "../Recipe/Recipes";
import AddRecipe from "../AddRecipe/AddRecipe";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
      {
          path: '/recipes',
          element: <Recipes></Recipes>
      }, 
      {
          path: '/add-recipes',
          element: <AddRecipe></AddRecipe>
      }, 
    ]
  },
]);


export default router;