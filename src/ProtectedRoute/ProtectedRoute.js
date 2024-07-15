import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = sessionStorage.getItem('loginToken');


  if (!token) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
