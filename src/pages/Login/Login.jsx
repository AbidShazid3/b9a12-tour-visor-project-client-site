import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/TourVisor.png'
import { FaEyeSlash, FaGoogle, FaRegEye } from 'react-icons/fa';
import { useState } from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { ImSpinner } from 'react-icons/im';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { user, loginUser, googleLogin, loading, setLoading } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(location.state);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                reset();
                toast.success('Login Successfully');
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }

    const handleGoogleLogIn = () => {
        googleLogin()
            .then(result => {
                const googleLoggedUser = result.user;
                console.log(googleLoggedUser);
                toast.success('Login successful!');
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }

    if (user) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 md:mt-10 lg:mt-10">
            <div className="flex justify-center mx-auto">
                <img className="w-16 h-16 rounded-xl" src={img1} alt="Logo" />
            </div>
            <h1 className="text-4xl text-center font-bold text-white mt-2">Login now!</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div>
                    <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                    <input type="email" {...register("email", { required: true })} name="email" id="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                    </div>

                    <div className='relative'>
                        <input type={showPass ? 'text' : 'password'} {...register("password",
                            {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[a-z])/
                            })}
                            name="password" id='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        <span className='text-white absolute right-3 top-3' onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <FaEyeSlash ></FaEyeSlash> : <FaRegEye ></FaRegEye>
                            }
                        </span>
                        {errors.password?.type === "required" && (
                            <p className="text-red-500">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-500">Must be 6 character</p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-red-500">Must be less than 20 character</p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-500">Must have an uppercase and lowercase letter</p>
                        )}
                    </div>
                </div>

                <div className="mt-6">
                    <button disabled={loading} type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    {loading ? <ImSpinner className='animate-spin mx-auto' /> : 'LogIn'}
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                    or login with Social Media
                </a>
                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button disabled={loading} onClick={handleGoogleLogIn} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <FaGoogle />
                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>
            </div>

            <p className="mt-8 text-lg font-medium text-center text-gray-400"> Don`t have an account? <Link to='/register' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
        </div>
    );
};

export default Login;