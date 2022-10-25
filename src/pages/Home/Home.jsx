import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';
import HomeAuth from 'components/Home/HomeAuth/HomeAuth';
import HomeUser from 'components/Home/HomeUser/HomeUser';
import ErrorBoundaries from 'utils/ErrorBoundaries';

export default function Home() {
  const isLoggedIn = useSelector(authSelectors.selectLogIn);
  return (
    <>
      {isLoggedIn ? (
        <ErrorBoundaries>
          <HomeUser />
        </ErrorBoundaries>
      ) : (
        <ErrorBoundaries>
          <HomeAuth />
        </ErrorBoundaries>
      )}
    </>
  );
}
