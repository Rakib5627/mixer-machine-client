import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    

    const navLinks = <>
        <li className=""><NavLink to="/">Home</NavLink></li>
        <li className=""><NavLink to="/rooms">Recipes</NavLink></li>
        <li className=""><NavLink to="/bookings">Google Login</NavLink></li>


    </>

    return (
        <div className="navbar bg-my-pink rounded-b-lg text-my-blue">
            <div className="navbar-start">
                <Link className="normal-case text-lg md:text-3xl font-bold">Recipe Master</Link>
            </div>
            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}

                    </ul>

                </div>

            </div>
            
            




        </div>
    );
};

export default Navbar;