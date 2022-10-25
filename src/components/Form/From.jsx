import React, { useEffect, useState } from 'react';

import {
  PencilSquareIcon,
  PlusCircleIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid';

export default function From({
  handleSubmit,
  name: contactName = '',
  number: contactNumber = '',
  submitName,
  add,
  edit,
  login,
  register,
}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setName(contactName);
    setNumber(contactNumber);
  }, [contactName, contactNumber]);

  function submitHandler(evt) {
    evt.preventDefault();
    handleSubmit({ evt, setName, setNumber, setEmail, setPassword });
  }

  const handleInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mt-5 px-2 sm:px-3"
      autoComplete="off"
    >
      {(add || edit) && (
        <>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            className="block w-full rounded-md border border-gray-300 px-4 py-2 leading-6 drop-shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label
            htmlFor="number"
            className="mt-5 block text-lg font-medium text-gray-700"
          >
            Phone number
          </label>
          <input
            className="block w-full rounded-md border border-gray-300 px-4 py-2 leading-6 drop-shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            id="number"
            name="number"
            type="tel"
            value={number}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </>
      )}

      {(login || register) && (
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 leading-6 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleInput}
              autoComplete="email"
              placeholder="Email address"
              required
            />
          </div>

          {register && (
            <>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 leading-6 text-gray-900 placeholder-gray-500 focus:border-b-2  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleInput}
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </>
          )}

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3  py-2 leading-6 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-t focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleInput}
              autoComplete="current-password"
              placeholder="Password"
              required
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className=" mx-auto mt-5 flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm drop-shadow-sm transition duration-150 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {add && (
          <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        )}
        {edit && (
          <PencilSquareIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        )}
        {login && (
          <LockClosedIcon
            className="-ml-1 mr-2 h-5 w-5 text-indigo-300 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        )}
        {submitName}
      </button>
    </form>
  );
}
