import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { authSelectors } from 'redux/auth';
import { features } from 'components/constants';

export default function HomeUser() {
  const userName = useSelector(authSelectors.selectName);
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="md:text-center">
          <p className="mt-2 text-lg font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Welcome, {userName}
          </p>
          <p className="text-md mt-4 max-w-2xl text-gray-500 md:mx-auto">
            This page features currently available functions in the app. Main
            goal, creating this app, was to practice React with Redux and
            React-Router, save data with Persist, make authentication and async
            data fetching with REST API and asyncThunks.
          </p>
        </div>

        <dl className="mt-5 space-y-5 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:space-y-0">
          {features.map(feature => (
            <Link
              to={feature.dest}
              key={feature.name}
              className="relative rounded-md drop-shadow-sm sm:border sm:border-gray-300 sm:p-4 sm:hover:border-gray-600  "
            >
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </Link>
          ))}
        </dl>
      </div>
    </>
  );
}
