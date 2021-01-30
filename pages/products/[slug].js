import Head from 'next/head';
// import products from '../../products.json';
import { fromImageToUrl, API_URL } from '../../utils/urls';
import { twoDecimals } from '../../utils/format';

// const product = products[0];

const Product = ({ product }) => {
  return (
    <div>
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}
        {product.meta_description && (
          <meta name='description' content={product.meta_description} />
        )}
      </Head>
      <h3>{product.name}</h3>
      <img src={fromImageToUrl(product.image)} /> <h3>{product.name}</h3>
      <p>Rs {twoDecimals(product.price)}</p>
      <h3>Product Desc</h3>
      <p>{product.content}</p>
    </div>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();
  console.log('SLUGSSSSS', found);
  return {
    props: {
      product: found[0],
    },
  };
}

export async function getStaticPaths() {
  // Reteive all possibe paths

  const products_res = await fetch(`${API_URL}/products/`);
  const products = await products_res.json();
  console.log('PRODUCTSSSSS', products);

  // return to next context
  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false, //Tells to nextjs to show a 404 if params doesnt match
  };
}

export default Product;
