import useRole from "../hooks/useRole";
import LoadingSpinner from "../pages/Shared/LoadingSpinner/LoadingSpinner";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const AdminRoute = ({ children }) => {
    const [role, isLoading] = useRole();

    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    
    if (role === 'admin') return children
    
    return <Navigate to='/dashboard'></Navigate>
};

AdminRoute.propTypes = {
    children: PropTypes.element,
  }

export default AdminRoute;