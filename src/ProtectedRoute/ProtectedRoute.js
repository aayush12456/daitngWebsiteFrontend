import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = sessionStorage.getItem('loginToken');
  const registerToken=sessionStorage.getItem('registerToken')


  if (!token && !registerToken) {
    return <Navigate to="/" />;
  }


  return element;
};

export default ProtectedRoute;
