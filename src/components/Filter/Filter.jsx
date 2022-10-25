import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from 'redux/contacts/contactsSelectors.js';
import { setFilterData } from 'redux/contacts/filterSlice';

const Filter = () => {
  const searchValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const setFilter = evt => {
    dispatch(setFilterData(evt.target.value));
  };

  return (
    <label className="mt-5 block px-3 text-lg font-medium text-gray-700 ">
      Find contacts by name
      <input
        className="block w-full rounded-md border border-gray-300 px-4 py-2 leading-6 drop-shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        type="text"
        value={searchValue}
        onChange={setFilter}
      />
    </label>
  );
};

export default Filter;
