import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { contactsThunks } from 'redux/contacts';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import Form from 'components/Form';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ name, number, id, onClose }) {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);

  useEffect(() => {
    const onKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose(false);
    }
  };

  const handleSubmit = ({ evt, setName, setNumber }) => {
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;
    const filteredList = contactList.filter(contact => contact.id !== id);
    const editedContact = contactList.find(contact => contact.id === id);
    const editedItem = {
      id,
    };

    if (filteredList.some(contact => contact.name === name)) {
      return alert(
        'Contact with this name already exist, please enter another name 🌚'
      );
    }

    if (filteredList.some(contact => contact.number === number)) {
      return alert(
        'Contact with this number already exist, please enter another number 📱'
      );
    }

    if (editedContact.name !== name) {
      editedItem.name = name;
    }
    if (editedContact.number !== number) {
      editedItem.number = number;
    }

    dispatch(contactsThunks.updateContact(editedItem));
    onClose(false);
  };

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 transition-opacity"
      onClick={handleClick}
    >
      <section className="h-6/12 w-10/12 flex-shrink-0 transform overflow-hidden rounded-lg border border-gray-300 bg-gray-50 px-2 pb-4 shadow-xl drop-shadow-sm transition-all sm:w-8/12">
        <h2 className="mt-4 self-center text-center text-xl leading-5 text-gray-500 sm:text-2xl">
          Edit contact
        </h2>
        <Form
          handleSubmit={handleSubmit}
          name={name}
          number={number}
          submitName="Save changes"
          edit
        />
      </section>
    </div>,
    modalRoot
  );
}
