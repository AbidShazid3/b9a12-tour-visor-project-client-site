import Swal from "sweetalert2";
import useBookings from "../../../hooks/useBookings";
import Heading from "../../Shared/Heading/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const MyBooking = () => {
    const [bookings, refetch] = useBookings();
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Booking Package Has Been Canceled Successfully.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
            }
        });
    }

    return (
        <div>
            <Heading heading={'My Booking Section'} subHeading={'Adventure Awaits: Book Your Dream, Tour Today'}></Heading>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054]">
                        <tr className="text-sm text-white">
                            <th>Package Name</th>
                            <th>Tour Guide</th>
                            <th>Tour Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <tr key={booking._id} className="hover">
                                <th>{booking.packageTitle}</th>
                                <td>{booking.tourGuide}</td>
                                <td>{new Date(booking.tourDate).toLocaleDateString()}</td>
                                <td>TK{booking.price}</td>
                                <td>{booking.status}</td>
                                <td>
                                    <button disabled={booking.status === 'In Review' || booking.status === 'Rejected'} className="btn btn-xs btn-success">Pay</button>
                                </td>
                                <td>
                                    <button disabled={booking.status === 'Accepted'} onClick={() => handleDelete(booking._id)} className="btn btn-xs btn-error">Cancel</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;