'use client';

import { useState } from 'react';

import ChildA from './child-a';
// import ChildB from './child-b';

export default function Parent() {
  // 宣告一組狀態，讓子女A回傳資料到這元件使用
  const [pData, setPData] = useState('');

  return (
    <>
      <h2>Parent(父母元件)</h2>
      <hr />
      <p>來自子女元件A的資料: {pData}</p>
      {/* C -> P範例 */}
      <ChildA setPData={setPData} />
      {/* <ChildB /> */}
    </>
  );
}
