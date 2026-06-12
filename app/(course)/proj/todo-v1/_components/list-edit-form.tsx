'use client';

import { useState } from 'react';
// 導入類型(型別)
import { Todo } from '../_types/todo';

export interface ListEditFormProps {
  todo: Todo;
  onSave: (id: string, updatedText: string) => void;
}

export default function ListEditForm({ todo, onSave }: ListEditFormProps) {
  // 用目前的todo.text當初始值
  const [inputText, setInputText] = useState(todo.text);

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onSave(todo.id, inputText);
        }}
      >
        儲存
      </button>
    </>
  );
}
