import { Link } from "react-router-dom";


const TourGuidesCards = () => {
    return (
        <div>
            <div className="flex max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
                <div className="w-2/4 bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')" }}></div>

                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">Name: Rubyat md Fakrul Hassan</h1>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Email: rubyathassan195@gmail.com</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Mobile: 01712292871</p>

                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">TK 2000</h1>
                        
                        <Link to='/tour-guide-details'>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourGuidesCards;