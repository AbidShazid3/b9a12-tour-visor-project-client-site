import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import GuideDataRow from "./GuideDataRow";
import Heading from "../../Shared/Heading/Heading";


const MyAssignedTours = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: guideName = [], refetch } = useQuery({
        queryKey: ['guideName', user?.displayName],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/${user?.displayName}`)
            return res.data;
        }
    })

    return (
        <div>
            <Heading heading={'Journey Tracker: My Assigned Tours'} subHeading={'Dive into the details of your upcoming tours and get ready for an unforgettable journey.'}></Heading>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th> Package`s Name</th>
                            <th>Tourist Name</th>
                            <th>Tour Date</th>
                            <th>Tour Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            guideName.map(guide=> <GuideDataRow key={guide._id} guide={guide} refetch={refetch}></GuideDataRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAssignedTours;