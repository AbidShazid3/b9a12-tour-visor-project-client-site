import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import registerBG2 from '../../assets/images/bg2.jpg'
import registerImg from '../../assets/images/register.jpg'
import toast from "react-hot-toast";
import { FaArrowsSpin } from "react-icons/fa6";


const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { user, createUser, updateUserProfile, loading, setLoading } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const registerUser = result.user;
                console.log(registerUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        reset();
                        toast.success('Login successful!');
                        navigate('/');
                    })
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse border shadow-2xl rounded-lg" style={{ backgroundImage: `url(${registerBG2})` }}>
                <div className="text-center w-2/5 lg:text-left">
                    <img src={registerImg} alt="" className="rounded-lg" />
                </div>
                <div className="card shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-4xl text-center font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo" className="input input-bordered" />
                            {errors.photo && <span className="text-red-500">Photo is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type={showPass ? 'text' : 'password'} {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[a-z])/
                                    })} name="password" className="grow" placeholder="Password" />
                                <span onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEyeSlash></FaEyeSlash> : <FaRegEye ></FaRegEye>
                                    }
                                </span>
                            </label>
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
                        <div className="form-control mt-6">
                            <button disabled={loading} className="btn btn-outline border-0 text-xl text-white bg-[#D1A054B2]">
                                {loading ? <FaArrowsSpin className='animate-spin mx-auto' /> : 'Register'}
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <Link to="/login" className="text-lg text-black font-bold hover:text-green-500">Already registered? Go to log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;