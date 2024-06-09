import toast from "react-hot-toast";
import Heading from "../../Shared/Heading/Heading";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const TouristRequest = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleRequest = async () => {

        try {
            const currentUser = {
                email: user?.email,
                role: 'tourist',
                status: 'Requested',
            }
            const { data } = await axiosSecure.put('/user', currentUser)
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success('Success, Pease wait for admin confirmation')
            } else {
                toast.success('Pease wait for admin approval')
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div>
            <Heading heading={'Request section'} subHeading={'You can request to admin'}></Heading>
            <div className="text-center p-2">
                <h2 className="text-2xl font-bold">Are you sure you want to request Admin to be a tour guide?</h2>
                <p className="text-xl font-semibold p-2">Click on the request button</p>
            </div>
            <div className="flex justify-center p-2">
                <button onClick={handleRequest} className="btn btn-outline btn-accent">Request</button>
            </div>
        </div>
    );
};

export default TouristRequest;