import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsThunks';
import Form from 'components/Form';

function ContactForm() {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);

  const handleSubmit = ({ evt, setName, setNumber }) => {
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    if (contactList.some(contact => contact.name === name)) {
      evt.target.reset();
      return alert(
        'Contact with this name already exist, please enter another name 🌚'
      );
    }
    if (contactList.some(contact => contact.number === number)) {
      evt.target.reset();
      return alert(
        'Contact with this number already exist, please enter another number 📱'
      );
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return <Form handleSubmit={handleSubmit} submitName="Add contact" add />;
}

export default ContactForm;
