import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import UserDataRow from "./UserDataRow";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const pages = [1, 2]

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users', filter, search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?filter=${filter}&search=${search}`)
            return res.data;
        }
    })

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    }

    const handleReset = () => {
        setFilter('');
        setSearch('');
    }

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <div className="md:flex lg:flex items-center gap-4 mt-5 space-y-2">
                <div>
                    <form onSubmit={handleSearch}>
                        <div className='flex justify-between p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder='Enter User Name/Email'
                                aria-label='Enter User Email'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex gap-4">
                    <select
                        onChange={e=> setFilter(e.target.value)}
                        name='role'
                        id='role'
                        value={filter}
                        className='border p-2 rounded-md'>
                        <option value=''>Filter By Role</option>
                        <option value='tourist'>Tourist</option>
                        <option value='guide'>Guide</option>
                        <option value='admin'>Admin</option>
                    </select>
                    <button onClick={handleReset} className='btn'>Reset</button>
                </div>
            </div>
            <div className='py-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-accent">
                            <tr className="text-white text-xl font-bold">
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Make Admin</th>
                                <th>Make Tour Guide</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <UserDataRow key={user._id} user={user} refetch={refetch}></UserDataRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <button className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center'>
                        <FaLongArrowAltLeft className="text-xl" />
                        <span className='mx-1'>previous</span>
                    </div>
                </button>

                {pages.map(btnNum => (
                    <button
                        key={btnNum}
                        className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}

                <button className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>
                        <FaLongArrowAltRight className="text-xl" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ManageUsers;