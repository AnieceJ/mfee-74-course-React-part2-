'use client';

import { useState } from 'react';

export default function MyTextarea() {
  // 一般文字輸入框
  const [text, setText] = useState('');
  return (
    <>
      <h2>文字輸入區域</h2>
      <hr />
      <textarea
        value={text}
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />
    </>
  );
}
