import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export default () => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const goBack = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div className={styles.nav}>
      {/* show this if fit is not in root-home */}
      {!isHome ? (
        <div className={styles.back}>
          <a onClick={goBack} href='#'>
            {'<'}Back
          </a>
        </div>
      ) : null}
      <div className={styles.title}>
        <Link href='/'>
          <a>
            <h1>FullStack E-Commerce with NextJS, Magic, Strapi and Stripe</h1>
          </a>
        </Link>
      </div>
    </div>
  );
};
