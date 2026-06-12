'use client';

import { ReactNode } from 'react';

interface Data {
  x?: number;
  y?: number;
}

// props
interface ChildProps {
  title?: string;
  price?: number;
  isConnected?: boolean;
  aa?: number[];
  oa?: Data;
  sum?: (a: number, b: number) => number;
  jsx?: ReactNode;
}

export default function Child({
  title = '',
  price = 0,
  isConnected = true,
  aa = [],
  oa = {},
  sum = (a, b) => a + b,
  jsx = <></>,
}: ChildProps) {
  return (
    <>
      <div>Child(子女元件)</div>
      <p>title={title}</p>
      <p>price={price}</p>
      {/* 布林值不會呈現渲染 */}
      <p>isConnected={JSON.stringify(isConnected)}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(1,2)={sum(1, 2)}</p>
      {/* JSX語法 */}
      <p>jsx={jsx}</p>
    </>
  );
}
