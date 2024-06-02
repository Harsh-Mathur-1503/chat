import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) {
    return <Navigate to={redirect} />;
  }
  return children ? children : <Outlet />;
};

ProtectRoute.propTypes = {
    children: PropTypes.node.isRequired,
    user: PropTypes.bool, // Change the prop type to PropTypes.bool
    redirect: PropTypes.string,
  };
  

export default ProtectRoute;
