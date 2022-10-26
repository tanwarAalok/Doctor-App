import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
  return localStorage.getItem('token') === null ? (
    <Navigate to="/"/>
  ) : (
          <Outlet/>
  )
}

export default ProtectedRoute