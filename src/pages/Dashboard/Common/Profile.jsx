import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import img2 from '../../../assets/images/bg2.jpg';

const Profile = () => {
    const { user, loading } = useAuth();

    if(loading) return <LoadingSpinner></LoadingSpinner>

    return (
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

                    <p className='p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full'>
                        {/* {role} */}
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
    );
};

export default Profile;