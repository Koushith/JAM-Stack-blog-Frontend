import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { fromImageToUrl, API_URL } from '../utils/urls';

export default function Home({ blog }) {
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </div>

      <section className='text-gray-600 body-font'>
        {blog.map((blog) => (
          <Link href={`/blogs/${blog.slug}`}>
            <div className='container px-5 py-20 mx-auto'>
              <img src={fromImageToUrl(blog.image)} />

              <div className='flex-grow sm:text-left text-center mt-12 sm:mt-0'>
                <h1 className='text-gray-900 text-2xl title-font font-medium mt-6 mb-2'>
                  {blog.title}
                </h1>
                <h3 className='text-gray-900 text-xl title-font font-medium mt-6 mb-2'>
                  {' '}
                  {blog.date}
                </h3>
                <p className='leading-relaxed text-base'>
                  {blog.meta_description}
                </p>
                <Link href={`/blogs/${blog.slug}`}>
                  <a className='mt-3 text-indigo-500 inline-flex items-center'>
                    Read More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  // fetch the products -makinh API calls

  const blog_res = await fetch(`${API_URL}/blogs/`);

  const blog = await blog_res.json();

  // return the products
  return {
    props: {
      blog,
    },
  };
}
