import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PasswordProtectedRoute = ({ element }) => {

const phoneSelector=useSelector((state)=>state.passData.passData)
console.log('phonr number selector',phoneSelector)

  if (!phoneSelector) {
    return <Navigate to="/forgotPassword" />;
  }

  return element;
};

export default PasswordProtectedRoute;
