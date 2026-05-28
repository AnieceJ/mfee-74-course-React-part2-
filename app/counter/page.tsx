// 這是一個 Next.js 的客戶端元件(RCC)指令
// 'use client' 告訴 Next.js 這個元件需要在瀏覽器中執行
// 因為它包含互動功能（按鈕點擊），所以必須在客戶端運行
'use client';

// "勾子"只能在客戶端元件(RCC)中使用
// "Hook" 是 React 的特殊函式，名稱都以 'use' 開頭
// useState 讓函式型元件能夠使用和管理狀態（資料）
import { useState } from 'react';

// 定義一個 React 元件
// 元件名稱必須以大寫字母開頭（帕斯卡/大駝峰命名法）
// export default 表示預設導出(一個檔案只能有一個預設導出)
// 一個程式碼檔案，撰寫一個元件
export default function CounterPage() {
  // 使用 useState Hook 來管理計數器的數值
  // useState 回傳一個陣列，包含兩個元素：
  // [0] count: 目前的狀態值(狀態變數)
  // [1] setCount: 用來更新狀態的函式(設定方法)
  // 參數 0 是 count 的初始值
  // 陣列解構指定值語法(array destructuring assignment)
  const [count, setCount] = useState(0);

  // 回傳 JSX，return代表這個元件的渲染(render)結果
  return (
    <>
      {/* 使用花括號 {} 來嵌入 JavaScript 表達式 */}
      {/* 這裡顯示 count 的目前值 */}
      <h1>{count}</h1>

      {/* 按鈕元件，當被點擊時會執行 onClick 函式 */}
      <button
        // 人造/合成(synthetic)事件屬性
        // 相當於由react在渲染後，協助作事件監聽的動作
        onClick={() => {
          // 使用 setCount 來更新 count 的值
          // 重要：不能直接修改 count，必須透過 setCount
          // 當狀態改變時，React 會重新渲染元件
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </>
  );
}
