import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  redirectDest = 'login',
  restricted = false,
}) {
  const isLoggedIn = useSelector(authSelectors.selectLogIn);
  const shouldRedirect = isLoggedIn && restricted;

  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  return shouldRedirect ? (
    <Navigate to={from ? from : redirectDest} replace /> //*If user refreshed the page in prev location, return him there.
  ) : (
    <Outlet />
  );
}
