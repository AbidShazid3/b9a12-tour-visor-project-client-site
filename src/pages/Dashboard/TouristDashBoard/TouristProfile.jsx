import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import img2 from '../../../assets/images/bg2.jpg';
import Heading from "../../Shared/Heading/Heading";
import usePackages from "../../../hooks/usePackages";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TouristProfile = () => {
    const { user, loading } = useAuth() || {};
    const [role, isLoading] = useRole();
    const [packages] = usePackages();
    const axiosSecure = useAxiosSecure();

    if (isLoading || loading) return <LoadingSpinner></LoadingSpinner>

    const handleStorySubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const touristName = form.name.value;
        const touristEmail = form.email.value;
        const storyTitle = form.package.value;
        const location = form.location.value;
        const description = form.description.value;
        const tripDate = form.date.value;
        
        try {
            const story= {touristName, touristEmail, storyTitle, location, description, tripDate}
            const res = await axiosSecure.post('/stories', story)
            if (res.data.insertedId) {
                form.reset();
                toast.success('Package added successfully');
            }

        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='bg-white shadow-lg rounded-2xl w-full'>
                    <img
                        alt='profile'
                        src={img2}
                        className='w-full mb-4 rounded-t-lg h-36'
                    />
                    <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                        <a href='#' className='relative block'>
                            <img
                                alt='profile'
                                src={user?.photoURL}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                            />
                        </a>

                        <p className='p-2 uppercase px-4 text-sm font-semibold text-white bg-green-600 rounded-full'>
                            {role}
                        </p>
                        <p className='mt-2 text-xl font-medium text-gray-800 '>
                            Last Login: {user?.metadata?.lastSignInTime}
                        </p>
                        <div className='w-full p-2 mt-4 rounded-lg'>
                            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 space-y-2'>
                                <p className='flex flex-col'>
                                    Name
                                    <span className='font-bold text-black '>
                                        {user?.displayName}
                                    </span>
                                </p>
                                <p className='flex flex-col'>
                                    Email
                                    <span className='font-bold text-black '>{user?.email}</span>
                                </p>

                                <div>
                                    <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                        Update Profile
                                    </button>
                                    <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Heading heading={'add your story'} subHeading={'Discover the world through the eyes of our community. Each story captures the essence of adventure, culture, and the unexpected moments that make travel extraordinary'}></Heading>
                <form onSubmit={handleStorySubmit} className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user.displayName} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user.email} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select Taken Package</span>
                        </label>
                        <select name="package" required defaultValue="" className="select select-bordered">
                            <option disabled value="">Pick One</option>
                            {packages.map(pack => (<option key={pack._id} value={pack.tripTitle}>{pack.tripTitle}</option>))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select Taken Package Location</span>
                        </label>
                        <select name="location" required defaultValue="" className="select select-bordered">
                            <option disabled value="">Select Location</option>
                            {packages.map(pack => (<option key={pack._id} value={pack.location}>{pack.location}</option>))}
                        </select>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Valuable Comment</span>
                        </label>
                        <input type="text" name="description" placeholder="Your experiences in tour" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="mt-6 col-span-full">
                        <button className="btn btn-active btn-accent text-xl w-full">Add Story</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TouristProfile;