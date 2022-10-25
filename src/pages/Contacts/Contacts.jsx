import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';

import ContactForm from 'components/Contact/ContactForm';
import ContactList from 'components/Contact/ContactList/ContactList';
import Filter from 'components/Filter';
import ErrorBoundary from 'utils/ErrorBoundaries';
import Skeleton from 'utils/Skeleton';
import ContactToggleBtn from 'components/ui/ContactToggleBtn';

export default function Contacts() {
  const [active, setActive] = useState(0);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleClick = id => {
    if ((active === 1) & (id === 1)) {
      return setActive(0);
    }
    if ((active === 2) & (id === 2)) {
      return setActive(0);
    }
    setActive(id);
  };

  return (
    <>
      <section>
        <ContactToggleBtn active={active} handleClick={handleClick} />
        {active === 1 && (
          <ErrorBoundary>
            <ContactForm />
          </ErrorBoundary>
        )}

        {active === 2 && (
          <ErrorBoundary>
            <Filter />
          </ErrorBoundary>
        )}

        <ErrorBoundary>
          {isLoading && !error && <Skeleton />}
          {error && (
            <p className="text-md mt-4 self-center text-center leading-5 text-gray-500 sm:text-lg">
              ooops, something went wrong! {error}
            </p>
          )}
          <ContactList />
        </ErrorBoundary>
      </section>
    </>
  );
}
