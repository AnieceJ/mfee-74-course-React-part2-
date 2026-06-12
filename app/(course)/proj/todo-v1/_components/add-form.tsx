'use client';

import { useState } from 'react';
// 導入類型(型別)
import { Todo } from '../_types/todo';

export interface AddFormProps {
  onAdd: (todo: Todo) => void;
}

export default function AddForm({ onAdd }: AddFormProps) {
  // 宣告給文字輸入框使用的狀態
  // 只在這個元件內部使用，稱為本地端狀態(local state)
  const [inputText, setInputText] = useState('');

  return (
    <>
      <input
        type="text"
        // 狀態是什麼 -> 文字輸入框呈現什麼
        value={inputText}
        // 在文字輸入框輸入了什麼 -> 狀態更動成什麼
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        // 按下enter鍵要觸發加入到todos
        onKeyDown={(e) => {
          // 按下enter鍵而且有輸入文字的情況下
          if (e.key === 'Enter' && inputText.trim()) {
            // 建立新的todo
            const newTodo: Todo = {
              id: crypto.randomUUID(), //新項目使用uuid當作id
              text: inputText,
              completed: false,
              isEditing: false,
            };

            onAdd(newTodo);

            // 清空文字輸入框
            setInputText('');
          }
        }}
      />
    </>
  );
}
