import React from 'react';

import {
  UserPlusIcon,
  AdjustmentsVerticalIcon,
} from '@heroicons/react/20/solid';

const styles =
  'inline-flex items-center drop-shadow-sm border border-transparent px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-0 active:bg-indigo-800';

export default function ContactToggleBtn({ active, handleClick }) {
  return (
    <div className="mt-5 flex items-center justify-center">
      <div
        className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
        role="group"
      >
        <button
          type="button"
          onClick={() => handleClick(1)}
          className={`${
            active === 1 ? 'bg-indigo-700' : 'bg-indigo-500'
          } ${styles} rounded-l-md`}
        >
          <UserPlusIcon className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
          Add
        </button>

        <button
          type="button"
          onClick={() => handleClick(2)}
          className={`${
            active === 2 ? 'bg-indigo-700' : 'bg-indigo-500'
          } ${styles} rounded-r-md`}
        >
          <AdjustmentsVerticalIcon
            className="-ml-1 mr-2 h-5 w-5 "
            aria-hidden="true"
          />
          Filter
        </button>
      </div>
    </div>
  );
}
