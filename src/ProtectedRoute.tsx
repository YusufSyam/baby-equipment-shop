import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext, TUserType } from './context/AuthContext.context';

interface ProtectedRouteProps {
  allowedRoles: TUserType[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const {
    userRole
  } = authContext;

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to={"not-found"} />; // Redirect ke halaman yang sesuai, misal home
  }

  return <Outlet />;
};

export default ProtectedRoute;
