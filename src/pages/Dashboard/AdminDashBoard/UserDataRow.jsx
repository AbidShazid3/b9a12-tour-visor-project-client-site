import PropTypes from 'prop-types'

const UserDataRow = ({ user, refetch }) => {

    return (
        <tr className="hover">
            <th>{user?.email}</th>
            <td>{user?.role}</td>
            <td>{user?.status ? (
                <p className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'} whitespace-no-wrap`}>{user.status}</p>) : (
                <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>)}</td>
            <td>
                <button className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                <span
                    aria-hidden='true'
                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                ></span>
                <span className='relative'>Update Role</span>
                </button>
            </td>
        </tr>
    )
}

UserDataRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func,
}

export default UserDataRow