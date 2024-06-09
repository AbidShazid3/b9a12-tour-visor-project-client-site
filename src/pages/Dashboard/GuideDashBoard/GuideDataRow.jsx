import PropTypes from 'prop-types'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const GuideDataRow = ({ guide, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const handleReject = (id) => {
        const updateStatus = {
            status: 'Rejected',
        }
        axiosSecure.patch(`/bookings/update/${id}`, updateStatus)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully Rejected')
                }else {
                    toast.success('Already Rejected The Booking')
                }
            })
    }

    const handleAccept = (id) => {
        const updateStatus = {
            status: 'Accepted',
        }
        axiosSecure.patch(`/bookings/update/${id}`, updateStatus)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully Accepted')
                }else {
                    toast.success('Already Accepted The Booking')
                }
            })
    }

    return (
        <tr className="hover">
            <th>{guide.packageTitle}</th>
            <td>{guide.touristName}</td>
            <td>{new Date(guide.tourDate).toLocaleDateString()}</td>
            <td>{guide.price}</td>
            <td className='flex gap-4'>
                <button disabled={guide.status === 'Rejected'} onClick={() => handleAccept(guide._id)} className="btn btn-outline btn-accent btn-xs">Accept</button>
                <button disabled={guide.status === 'Accepted'} onClick={() => handleReject(guide._id)} className="btn btn-outline btn-error btn-xs">Reject</button>
            </td>
        </tr>
    );
};

GuideDataRow.propTypes = {
    guide: PropTypes.object,
    refetch: PropTypes.func,
}

export default GuideDataRow;