import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { authSelectors } from 'redux/auth';

export default function PrivateRoute({ redirectDest = 'login' }) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.selectLogIn);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={redirectDest} state={{ from: location }} replace /> //* save state=from to return user after refresh to this location in PublicRoute
  );
}
