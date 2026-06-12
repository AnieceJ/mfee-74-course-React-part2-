'use client';

import styles from './css-loader.module.css';
import { CssLoaderProps } from '../_types';

export default function CssLoader({}: CssLoaderProps) {
  return (
    <>
      <div className={styles.loader}></div>
    </>
  );
}
