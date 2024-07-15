import React from 'react';
import { Navigate } from 'react-router-dom';

const PasswordProtectedRoute = ({ element }) => {
const forgotPhone=sessionStorage.getItem('forgotPhone')


  if (!forgotPhone) {
    return <Navigate to="/forgotPassword" />;
  }

  return element;
};

export default PasswordProtectedRoute;
