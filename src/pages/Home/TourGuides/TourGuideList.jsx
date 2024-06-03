import { Link } from "react-router-dom";


const TourGuideList = () => {

    return (
        <div className="bg-gray-50 shadow-xl rounded-xl">
            <div className="overflow-x-auto p-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th></th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">Tour Guide</div>
                                    </div>
                                </div>
                            </td>
                            <th>email</th>
                            <th>Purple</th>
                            <th><Link to='/tour-guide-details' className="btn btn-error btn-sm">View Details</Link></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TourGuideList;