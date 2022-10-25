import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TrashIcon, PencilIcon } from '@heroicons/react/20/solid';

import { contactsThunks } from 'redux/contacts';
import Modal from 'components/Modal';
// import s from 'components/Contact/ContactListItem/ContactListItem.module.css';

function ContactListItem({ data: { id, name, number } }) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(contactsThunks.deleteContact(id));
  };

  const onToggleModal = flag => {
    setModalOpen(flag);
  };

  return (
    <>
      <li className="flex items-center justify-between gap-2 rounded-lg border border-gray-300 p-2 drop-shadow-md sm:px-4">
        <div className="flex flex-col gap-1 sm:block  sm:gap-2">
          <p className=" block text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
            {name}
          </p>
          <span className="text-md block self-center leading-5 text-gray-500 sm:text-xl ">
            {number}
          </span>
        </div>
        <div className=" flex flex-col gap-1 sm:flex-row sm:gap-2">
          <button
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4  py-2 text-sm font-medium text-gray-700 shadow-sm drop-shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            type="button"
            onClick={() => onToggleModal(true)}
          >
            <PencilIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Edit
          </button>
          <button
            className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4  py-2 text-sm font-medium text-white shadow-sm drop-shadow-sm transition duration-150 ease-in-out hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Delete
          </button>
        </div>
      </li>
      {modalOpen && (
        <Modal name={name} number={number} id={id} onClose={onToggleModal} />
      )}
    </>
  );
}

ContactListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
