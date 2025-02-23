import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
       
    return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Sorry!!!</h1>
                    <p className="py-6">This is under construction</p>
                    <button className="btn btn-primary"><NavLink to="/">Back To Home</NavLink></button>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ErrorPage;