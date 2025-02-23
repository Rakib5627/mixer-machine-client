import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";



const Main = () => {
    return (
        <div>
          <div className=" mx-2 max-w-6xl md:mx-auto">
          <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
          
        </div>
    );
};

export default Main;