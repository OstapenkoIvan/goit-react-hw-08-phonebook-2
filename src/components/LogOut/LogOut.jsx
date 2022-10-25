import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function LogOut() {
  const nameArr = useSelector(authSelectors.selectName).split(' ');
  const initials =
    nameArr.length > 1
      ? nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase()
      : nameArr[0][0].toUpperCase();

  return (
    <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-md border-2 border-solid border-gray-100 text-gray-100  hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none active:bg-indigo-700">
      <Link to="/details" className="h-full w-full text-center leading-[34px]">
        {initials}
      </Link>
    </div>
  );
}
