import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';
import LogOutBtn from 'components/ui/LogOutBtn';

export default function UserMenu() {
  const userName = useSelector(authSelectors.selectName);
  const userEmail = useSelector(authSelectors.selectEmail);
  return (
    <section className="mt-5 p-2">
      <div className="sm:grid sm:grid-cols-3 sm:gap-6">
        <div className="sm:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-xl font-medium leading-6 text-gray-900">
              Profile
            </h3>
            <p className="text-md mt-1 text-gray-600">
              Your personal information described on this page.
            </p>
          </div>
        </div>
        <div className="mt-5 sm:col-span-2 sm:mt-0">
          <form action="#">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-md font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="text-md mt-1 text-gray-900 sm:mt-0">
                        {userName}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-md font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd className="text-md mt-1 text-gray-900 sm:mt-0">
                        {userEmail}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-md font-medium text-gray-500">
                        Application for
                      </dt>
                      <dd className="text-md mt-1 text-gray-900 sm:mt-0">
                        Frontend Developer
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                      <dt className="text-md font-medium text-gray-500">
                        Salary expectation
                      </dt>
                      <dd className="text-md mt-1 text-gray-900 sm:mt-0">
                        $800
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <LogOutBtn />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
