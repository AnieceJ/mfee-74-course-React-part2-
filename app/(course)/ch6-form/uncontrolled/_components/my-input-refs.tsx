'use client';

import { useRef } from 'react';

export default function MyInputRefs() {
  // 定義refs，這是一種React內部記憶的變數，可讀寫與渲染無關
  // 主要目的是讓React協助記錄真實DOM元素物件的背後引用
  // 執行後 inputRef = { current: null }
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h2>文字輸入框(使用refs)</h2>
      {/* 用ref屬性取代id屬性 */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // 正確作法，能在事件處理函式中呼叫
          // 使用時用inputRef.current來操作該文字輸入框
          const inputElement = inputRef.current;

          alert((inputElement as HTMLInputElement).value);
        }}
      >
        得到輸入框輸入值
      </button>
    </>
  );
}
