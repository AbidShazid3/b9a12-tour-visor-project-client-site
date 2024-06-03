import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const PackageCard = () => {
    return (
        <div className="max-w-xl overflow-hidden bg-slate-200 rounded-lg shadow-lg">
            <div className="px-4 py-4">
                <h1 className="text-xl font-bold text-gray-800 uppercase">Adventure</h1>
                <p className="mt-1 text-sm text-gray-600">Mountain Hiking Tour</p>
            </div>
            <div className="px-3">
                <Link to='/package-details'><button className="btn btn-sm btn-outline  hover:btn-accent mb-2">Package Details</button></Link>
            </div>
            <img className="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="" />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">TK 6000</h1>
                <button className="btn-xs text-xl text-white hover:text-2xl"><FaRegHeart /></button>
            </div>
        </div>
    );
};

export default PackageCard;