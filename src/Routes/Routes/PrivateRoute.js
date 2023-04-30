import React, { Children, useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const PrivateRoute = () => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation()

   if (loading) {
      return <Loading></Loading>
   }
   if (user) {
      return Children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;