import Head from 'next/head';

import { fromImageToUrl, API_URL } from '../../utils/urls';

const Blog = ({ blog }) => {
  return (
    <>
      <div>
        <Head>
          {blog.meta_title && <title>{blog.meta_title}</title>}
          {blog.meta_description && (
            <meta name='description' content={blog.meta_description} />
          )}
        </Head>
      </div>
      <section class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto flex flex-wrap'>
          <img src={fromImageToUrl(blog.image)} />

          <div className='flex-grow sm:text-left text-center mt-12 sm:mt-0'>
            <h1 className='text-gray-900 text-2xl title-font font-medium mt-6 mb-2'>
              {blog.title}
            </h1>
            <h3 className='text-gray-900 text-2xl title-font font-medium mt-6 mb-2'>
              Published On {blog.date}
            </h3>
            <p className='leading-relaxed text-base'>{blog.content}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const blogs_res = await fetch(`${API_URL}/blogs/?slug=${slug}`);
  const found = await blogs_res.json();
  console.log('SLUGSSSSS', found);
  return {
    props: {
      blog: found[0],
    },
  };
}

export async function getStaticPaths() {
  // Reteive all possibe paths

  const blogs_res = await fetch(`${API_URL}/blogs/`);
  const blogs = await blogs_res.json();

  // return to next context
  return {
    paths: blogs.map((blog) => ({
      params: { slug: String(blog.slug) },
    })),
    fallback: false, //Tells to nextjs to show a 404 if params doesnt match
  };
}

export default Blog;
