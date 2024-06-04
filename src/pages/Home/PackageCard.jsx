import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PackageCard = ({ pack }) => {
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
            <img className="object-cover w-full h-48 mt-2" src={pack.img} alt="" />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">TK {pack.price}</h1>
                <button className="btn-xs text-xl text-white hover:text-2xl"><FaRegHeart /></button>
            </div>
        </div>
    );
};

PackageCard.propTypes = {
    pack: PropTypes.object,
}

export default PackageCard;