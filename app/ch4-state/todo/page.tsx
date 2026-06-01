'use client';

import { useState } from 'react';

// 範例資料(mock)
const initData = [
  {
    id: 1,
    text: '繳電信費',
  },
  { id: 2, text: '寫作業' },
];

export default function TodoPage() {
  // 記錄待辨事項的狀態
  const [todos, setTodos] = useState(initData);
  // 宣告給文字輸入框使用的狀態
  const [inputText, setInputText] = useState('aaa');

  return (
    <>
      <h1>待辨事項</h1>
      <hr />
      <input
        type="text"
        // 狀態是什麼 -> 文字輸入框呈現什麼
        value={inputText}
        // 在文字輸入框輸入了什麼 -> 狀態更動成什麼
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </>
  );
}
