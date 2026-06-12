'use client';

import { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

export default function MyInput() {
  // 一般文字輸入框
  const [text, setText] = useState('');
  // 密碼輸入框
  const [pass, setPass] = useState('');
  // 顯示密碼用的布林值狀態
  const [show, setShow] = useState(false);

  return (
    <>
      <h2>文字輸入框類</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />
      <h2>密碼輸入框</h2>
      <input
        type={show ? 'text' : 'password'}
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => {
          setShow(e.target.checked);
        }}
      />
      呈現密碼
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </button>
    </>
  );
}
