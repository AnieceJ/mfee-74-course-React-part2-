'use client';

// props
interface ChildAProps {
  setPData: (s: string) => void;
}

export default function ChildA({ setPData = () => {} }: ChildAProps) {
  const cData = '子女a內部資料';

  return (
    <>
      <div>ChildA(子女元件A)</div>
      <button
        onClick={() => {
          // 子女中得到父母傳來的設定狀態的方法，呼叫後回傳資料回父母元件
          // set狀態的方法因為有副作用，只能在事件處理函式或useEffect鉤子中呼叫
          setPData(cData);
        }}
      >
        送資料到父母元件
      </button>
    </>
  );
}
