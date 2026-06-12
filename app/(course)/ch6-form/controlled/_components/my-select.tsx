'use client';

import { useState } from 'react';

export default function MySelect() {
  const [pet, setPet] = useState('');

  return (
    <>
      <h2>下拉清單</h2>
      <hr />
      <select
        value={pet}
        onChange={(e) => {
          setPet(e.target.value);
        }}
      >
        <option value="">請選擇寵物</option>
        <option value="狗">狗</option>
        <option value="貓">貓</option>
      </select>
    </>
  );
}
