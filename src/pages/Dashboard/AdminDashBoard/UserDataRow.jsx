import PropTypes from 'prop-types'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

const UserDataRow = ({ user, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const { mutateAsync } = useMutation({
        mutationFn: async role => {
            const { data } = await axiosSecure.patch(`/users/update/${user?.email}`, role);
            return data;
        },
        onSuccess: (data) => {
            refetch();
            toast.success('User role updated successfully!')
        }
    })

    const handleAdmin = async () => {
        const userRole = {
            role: 'admin',
            status: 'Verified',
        }
        try {
            await mutateAsync(userRole);

        } catch (err) {
            toast.error(err.message);
        }
    }

    const handleTourGuide = async () => {
        const userRole = {
            role: 'guide',
            status: 'Verified',
        }
        try {
            await mutateAsync(userRole);

        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <tr className="hover">
            <th>{user?.email}</th>
            <td>{user?.role}</td>
            <td>{user?.status ? (
                <p className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'} whitespace-no-wrap`}>{user.status}</p>) : (
                <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>)}</td>
            <td>
                <button onClick={handleAdmin} disabled={user?.status  === 'Verified'} className='btn btn-sm btn-accent'>Make Admin</button>
            </td>
            <td>
                <button onClick={handleTourGuide} disabled={user?.status === 'Verified'} className='btn btn-sm btn-accent'>Make Tour Guide</button>
            </td>
        </tr>
    )
}

UserDataRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func,
}

export default UserDataRow