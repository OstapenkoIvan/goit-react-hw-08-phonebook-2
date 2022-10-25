import React from 'react';
import { useSelector } from 'react-redux';
import { Disclosure, Transition } from '@headlessui/react';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid';

import { authSelectors } from 'redux/auth';
import { NavAuth, NavMenu } from 'components/nav';
import ErrorBoundaries from 'utils/ErrorBoundaries';
import LogOut from 'components/LogOut';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.selectLogIn);
  return (
    <Disclosure
      as="nav"
      className="h-13.5 relative z-10 flex w-full justify-between bg-indigo-500 p-2 drop-shadow-md transition-all duration-150 ease-in-out sm:w-full"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className=" flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-md border-2 border-solid border-gray-100  text-gray-100 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none active:bg-indigo-700 sm:hidden">
            {open ? (
              <BarsArrowUpIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <BarsArrowDownIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </Disclosure.Button>
          <ul className=" hidden w-full  sm:flex">
            {isLoggedIn ? (
              <ErrorBoundaries>
                <NavMenu />
              </ErrorBoundaries>
            ) : (
              <ErrorBoundaries>
                <NavAuth />
              </ErrorBoundaries>
            )}
          </ul>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="  opacity-0"
            enterTo="  opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="  opacity-100"
            leaveTo="  opacity-0"
          >
            <Disclosure.Panel
              as="ul"
              className="absolute left-0 top-12 flex w-[480px] min-w-[320px] flex-col gap-1 rounded-b bg-indigo-500 p-1.5 transition-all duration-150 ease-in-out sm:hidden sm:w-screen sm:gap-2"
            >
              {({ close }) => (
                <>
                  {isLoggedIn ? (
                    <ErrorBoundaries>
                      <NavMenu close={close} />
                    </ErrorBoundaries>
                  ) : (
                    <ErrorBoundaries>
                      <NavAuth close={close} />
                    </ErrorBoundaries>
                  )}
                </>
              )}
            </Disclosure.Panel>
          </Transition>

          {isLoggedIn && <LogOut />}
        </>
      )}
    </Disclosure>
  );
}
