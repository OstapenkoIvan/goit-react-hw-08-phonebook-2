import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  HomeIcon,
  DocumentPlusIcon,
  DocumentTextIcon,
} from '@heroicons/react/20/solid';
import NavButton from 'components/ui/NavButton';

const styles =
  'cursor-pointer inline-flex items-center border border-transparent text-sm font-medium rounded-md pl-2.5 text-gray-100 hover:bg-indigo-700 sm:mr-2 py-2 sm:px-4';

export function NavAuth({ close }) {
  const { pathname } = useLocation();

  return (
    <>
      <li
        className={`${
          pathname === '/' ? 'bg-indigo-700' : 'bg-transparent'
        } ${styles}`}
        onClick={close}
      >
        <HomeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        <NavButton to="/">Home</NavButton>
      </li>
      <li
        className={`${
          pathname === '/register' ? 'bg-indigo-700' : 'bg-transparent'
        } ${styles} sm:ml-auto`}
        onClick={close}
      >
        <DocumentPlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        <NavButton to="/register">Sign Up</NavButton>
      </li>
      <li
        className={`${
          pathname === '/login' ? 'bg-indigo-700' : 'bg-transparent'
        } ${styles}`}
        onClick={close}
      >
        <DocumentTextIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        <NavButton to="/login">Sign In</NavButton>
      </li>
    </>
  );
}
