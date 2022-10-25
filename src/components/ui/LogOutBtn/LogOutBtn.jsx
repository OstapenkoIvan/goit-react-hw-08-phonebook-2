import React from 'react';
import { authThunks } from 'redux/auth';
import { useDispatch } from 'react-redux';

export default function LogOutBtn() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authThunks.authLogOut());
  };
  return (
    <button
      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      onClick={handleClick}
    >
      Log Out
    </button>
  );
}
