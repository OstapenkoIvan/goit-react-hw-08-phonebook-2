import React from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}
