import { Link, useNavigate, useRouteError } from "react-router-dom";
import errorPage from '../../assets/images/ErrorPage.png';
import { FaArrowLeft } from "react-icons/fa";


const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-center space-y-1">
                    <img src={errorPage} alt="" className="w-1/3 h-1/3 m-auto" />
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p className="text-red-600 text-xl font-semibold">{error.data}</p>
                    <div className="flex justify-center items-center gap-2">
                        <button onClick={() => navigate(-1)} className="text-lg md:text-2xl font-bold p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2 text-red-500"><FaArrowLeft /> Go Back</button>
                        <Link to="/" className="text-xl font-bold btn btn-info">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;