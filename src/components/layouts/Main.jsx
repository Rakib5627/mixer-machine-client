import { Outlet } from "react-router-dom";



const Main = () => {
    return (
        <div>
          <div className=" mx-2 max-w-6xl md:mx-auto pb-20">
            <Outlet></Outlet>
          </div>          
        </div>
    );
};

export default Main;