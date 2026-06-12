'use client';
// 這個特殊的next中的元件稱為錯誤邊界(Error boundary)，必定為客戶端元件

import { useEffect } from 'react';
import { ErrorProps } from './_types';

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 這裡可以記錄錯誤
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>發生錯誤</h1>
      <button onClick={() => reset()}>重試</button>
    </>
  );
}
