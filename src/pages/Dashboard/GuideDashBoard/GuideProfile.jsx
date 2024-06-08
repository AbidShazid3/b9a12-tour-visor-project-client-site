import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import img2 from '../../../assets/images/bg2.jpg';
import Heading from "../../Shared/Heading/Heading";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const GuideProfile = () => {
    const { user, loading } = useAuth() || {};
    const [role, isLoading] = useRole();
    const axiosSecure = useAxiosSecure();

    if (isLoading || loading) return <LoadingSpinner></LoadingSpinner>

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const profilePicture = form.photo.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const education = form.education.value;

        const skill1 = form.skill1.value;
        const skill2 = form.skill2.value;
        const skill3 = form.skill3.value;

        const company1 = form.company.value;
        const role1 = form.position.value;
        const years1 = form.years.value;

        try {
            const guideData = {
                name,
                profilePicture,
                email,
                phone,
                education,
                skills: [skill1, skill2, skill3],
                workExperience: [{ company: company1, role: role1, years: years1 }]
            }

            const res = await axiosSecure.post('/guides', guideData)
            if (res.data.insertedId) {
                form.reset();
                toast.success('Successfully submitted! You will get request soon');
            }
            
        } catch (err) {
            console.log(err.message);
            toast.error("Already Submitted");
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
                <Heading heading={'Guide Profile Form setup'} subHeading={'Profile highlights your expertise'}></Heading>
            </div>
            <form onSubmit={handleSubmit} className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
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
                            <span className="label-text">Education</span>
                        </label>
                        <input type="text" name="education" placeholder="Your Education" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Your Skill</span>
                        </label>
                        <input type="text" name="skill1" placeholder="Your Skill-1" className="input input-bordered" required />
                        <input type="text" name="skill2" placeholder="Your Skill-2" className="input input-bordered" required />
                        <input type="text" name="skill3" placeholder="Your Skill-3" className="input input-bordered" required />
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Image URL Link</span>
                        </label>
                        <input type="photo" name="photo" placeholder="Your Image url Link" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="tel" name="phone" placeholder="Your Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Work Experience</span>
                        </label>
                        <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
                        <input type="text" name="position" placeholder="Your Position/Role" className="input input-bordered" required />
                        <input type="text" name="years" placeholder="From Year to Year" className="input input-bordered" required />
                    </div>
                </div>
                <div className="mt-6 col-span-full">
                    <button className="btn btn-active btn-accent text-xl w-full">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default GuideProfile;