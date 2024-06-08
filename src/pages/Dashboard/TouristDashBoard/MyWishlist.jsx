import Swal from "sweetalert2";
import useWishlist from "../../../hooks/useWishlist";
import Heading from "../../Shared/Heading/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const MyWishlist = () => {
    const [wishlists, refetch] = useWishlist();
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
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/wishlists/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Package has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
            }
        });
    }

    return (
        <div>
            <Heading heading={'Future Adventures: Your Wishlist'} subHeading={'Dream big and plan ahead with your travel wishlist. Collect and save all the places you aspire to visit and start turning your wanderlust into real-life adventures. Add your favorite destinations today!'}></Heading>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054]">
                        <tr className="text-sm text-white">
                            <th>Package Name</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Duration</th>
                            <th>Action</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlists.map(wishlist => <tr key={wishlist._id} className="hover">
                                <th>{wishlist.tripTitle}</th>
                                <td>{wishlist.location}</td>
                                <td>TK{wishlist.price}</td>
                                <td>{wishlist.tourDuration}</td>
                                <td>
                                    <button onClick={() => handleDelete(wishlist._id)} className="btn btn-xs btn-outline btn-error">Delete</button>
                                </td>
                                <td>
                                    <Link to={`/package-details/${wishlist.packageId}`}>
                                        <button className="btn btn-xs btn-outline btn-accent">Details</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWishlist;