import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { authThunks } from 'redux/auth';

import routesMain from 'routes/routesMain';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authThunks.authRefresh());
  }, [dispatch]);

  return <RouterProvider router={routesMain} />;
}

export default App;
