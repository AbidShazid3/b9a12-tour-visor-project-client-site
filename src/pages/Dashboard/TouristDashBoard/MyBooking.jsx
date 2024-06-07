import useBookings from "../../../hooks/useBookings";
import Heading from "../../Shared/Heading/Heading";


const MyBooking = () => {
    const [bookings, refetch] = useBookings();
    console.log(bookings);

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
                                    <button disabled={booking.status === 'In Review'} className="btn btn-xs btn-success">Pay</button>
                                </td>
                                <td>
                                    <button disabled={booking.status === 'Accepted'} className="btn btn-xs btn-error">Cancel</button>
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