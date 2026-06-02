'use client';

// props
interface ChildBProps {
  pData: string;
}

export default function ChildB({ pData = '' }: ChildBProps) {
  return (
    <>
      <div>ChildB(子女元件B)</div>
      <p>來自子女元件A的資料: {pData}</p>
    </>
  );
}
