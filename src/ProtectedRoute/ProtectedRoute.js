import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = sessionStorage.getItem('loginToken');
  const registerToken=sessionStorage.getItem('registerToken')
  const adminLoginToken=sessionStorage.getItem('adminLoginToken')
  const adminRegisterToken=sessionStorage.getItem('adminRegisterToken')


  if (!token && !registerToken && !adminLoginToken && !adminRegisterToken) {
    return <Navigate to="/" />;
  }


  return element;
};

export default ProtectedRoute;
