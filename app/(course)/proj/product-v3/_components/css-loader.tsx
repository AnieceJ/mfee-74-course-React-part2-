'use client';

import styles from './css-loader.module.css';

export default function CssLoader() {
  return (
    <>
      <div className={styles.loader}></div>
    </>
  );
}
