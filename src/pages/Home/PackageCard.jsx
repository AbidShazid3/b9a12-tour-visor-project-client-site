import { FaRegHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const PackageCard = ({ pack }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (pack) => {
        console.log(pack);
        if (user && user?.email) {
            const wishlistPackage = {
                email: user.email,
                addedUser: user.displayName,
                tripTitle: pack.tripTitle,
                location: pack.location,
                price: pack.price,
                packageId: pack._id,
            }
            axiosSecure.post('/wishlists', wishlistPackage)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success(`${pack.tripTitle} added to your wishlist`)
                    }
                })
                .catch(error => {
                    toast.error(error.message);
                })
        }
        else {
            Swal.fire({
                title: "Are you not logged in",
                text: "Pls login first to add!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="max-w-xl overflow-hidden bg-slate-200 rounded-lg shadow-lg">
            <div className="px-4 py-4">
                <h1 className="text-xl font-bold text-gray-800 uppercase">{pack.tripTitle}</h1>
                <p className="mt-1 text-sm text-gray-600">Type: {pack.tourType}</p>
                <p className="mt-1 text-sm text-gray-600">Location: {pack.location}</p>
            </div>
            <div className="px-3">
                <Link to={`/package-details/${pack._id}`}><button className="btn btn-sm btn-outline  hover:btn-accent mb-2">Package Details</button></Link>
            </div>
            <img className="object-cover w-full h-48 mt-2" src={pack.img[0]} alt="" />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">TK {pack.price}</h1>
                <button onClick={() => handleAddToCart(pack)} className="btn-xs text-xl text-white hover:text-2xl"><FaRegHeart /></button>
            </div>
        </div>
    );
};

PackageCard.propTypes = {
    pack: PropTypes.object,
}

export default PackageCard;