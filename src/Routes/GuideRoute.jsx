import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../pages/Shared/LoadingSpinner/LoadingSpinner";
import PropTypes from 'prop-types'

const GuideRoute = ({ children }) => {
    const [role, isLoading] = useRole();

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    if (role === 'guide') return children

    return <Navigate to='/dashboard'></Navigate>
};

GuideRoute.propTypes = {
    children: PropTypes.element,
}

export default GuideRoute;