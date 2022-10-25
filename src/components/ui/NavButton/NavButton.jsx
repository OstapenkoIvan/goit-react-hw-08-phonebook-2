import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LoginBtn({ children, to }) {
  return <NavLink to={to}>{children}</NavLink>;
}
