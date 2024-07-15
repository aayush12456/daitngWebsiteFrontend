import React from 'react';
import { Navigate } from 'react-router-dom';

const RegisterProtectedRoute = ({ element }) => {
  const additionalInformation = JSON.parse(sessionStorage.getItem('additionalInformation'));
  const aboutMeInformation = JSON.parse(sessionStorage.getItem('aboutMeInformation'));


  if (!additionalInformation || !aboutMeInformation) {
    return <Navigate to="/anotherContent" />;
  }
 
  return element;
};

export default RegisterProtectedRoute;
