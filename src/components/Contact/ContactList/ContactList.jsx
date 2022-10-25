import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsSelector, contactsThunks } from 'redux/contacts';
import ContactListItem from 'components/Contact/ContactListItem/ContactListItem';

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const dispatch = useDispatch();
  const contactList = useSelector(contactsSelector.selectContacts);
  const filterContent = useSelector(contactsSelector.selectFilter);

  useEffect(() => {
    dispatch(contactsThunks.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (Number(filterContent) > 0) {
      setFilteredList(
        contactList.filter(contact => contact.number.includes(filterContent))
      );
      return;
    }
    setFilteredList(
      contactList.filter(contact =>
        contact.name.toLowerCase().includes(filterContent.toLowerCase())
      )
    );
  }, [contactList, filterContent]);

  return (
    <ul className="mt-5 flex flex-col gap-5  px-2 sm:px-3">
      {filteredList.map(contact => (
        <ContactListItem key={contact.id} data={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
