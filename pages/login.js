import Head from 'next/head';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [input, setInput] = useState('');
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(input);
  };

  return (
    <>
      <div>
        <Head>
          <title>Login</title>
          <meta name='description' />
        </Head>
      </div>

      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
          <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
            <h1 className='title-font font-medium text-3xl text-gray-900'>
              Auth simplified.
            </h1>
            <p className='leading-relaxed mt-4'>
              One SDK for passwordless, WebAuthn, and social login - fully
              customizable.
            </p>
          </div>
          <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
            <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
              Sign Up
            </h2>

            <div className='relative mb-4'>
              <form>
                <label for='email' className='leading-7 text-sm text-gray-600'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                <button
                  className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
