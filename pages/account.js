import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import AuthContext, { AuthProvider } from '../context/AuthContext';
import { API_URL } from '../utils/urls';

export default function Account() {
  const { user, logoutUser } = useContext(AuthContext);

  if (!user) {
    return (
      <div>
        <section className='text-gray-600 body-font'>
          <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
            <div className='text-center lg:w-2/3 w-full'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                Account Page
              </h1>
              <p className='mb-8 leading-relaxed'>
                Please Log-in to Edit the Blogs
              </p>
              <div className='flex justify-center'>
                <Link href='/login'>
                  <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return (
    <>
      <div>
        <Head>
          <title>Your Account</title>
          <meta name='description' content='Your orders will be shown here' />
        </Head>
      </div>

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
          <div className='text-center lg:w-2/3 w-full'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Account Page
            </h1>
            <p className='mb-8 leading-relaxed'>Logged in as :{user.email}</p>
            <div className='flex justify-center'>
              <button
                className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                onClick={logoutUser}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
