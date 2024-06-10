import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { motion } from "framer-motion"

const TourGuidesCards = ({ guide }) => {
    
    return (
        <motion.div whileHover={{ scale: 0.9 }}>
            <div className="flex max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
                <div>
                    <img src={guide.profilePicture} alt="" className="size-40 mx-auto" />
                </div>
                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">Name: {guide?.name}</h1>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Email: {guide?.email}</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Mobile: {guide?.phone}</p>

                    <div className="mt-3">
                        <Link to={`/tour-guide-details/${guide._id}`}>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

TourGuidesCards.propTypes = {
    guide: PropTypes.object,
}

export default TourGuidesCards;