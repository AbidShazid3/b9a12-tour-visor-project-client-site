import { Link, useRouteError } from "react-router-dom";
import errorPage from '../../assets/images/ErrorPage.png';


const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
            <div className="text-center space-y-1">
                <img src={errorPage} alt="" className="w-1/3 h-1/3 m-auto" />
                <p>Sorry, an unexpected error has occurred.</p>
                <p className="text-red-600 text-xl font-semibold">{error.data}</p>
                <Link to="/" className="text-xl font-bold btn btn-info">Back To Home</Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;