'use client';

import { useState } from 'react';

export default function MyRadioButtons() {
  const [pet, setPet] = useState('');
  // 作為選項的字串陣列(或是用物件陣列)
  const options = ['狗', '貓', '金魚'];

  return (
    <>
      <h2>選項按鈕群組</h2>
      <hr />
      {options.map((v, i) => {
        return (
          <label key={i}>
            <input
              type="radio"
              checked={pet === v}
              value={v}
              onChange={(e) => {
                setPet(e.target.value);
              }}
            />
            {v}
          </label>
        );
      })}
    </>
  );
}
