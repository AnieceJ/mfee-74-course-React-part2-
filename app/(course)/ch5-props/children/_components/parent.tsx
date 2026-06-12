'use client';

import { ReactNode } from 'react';

export interface ParentProps {
  children?: ReactNode;
}

export default function Parent({ children }: ParentProps) {
  return (
    <>
      <div style={{ color: 'red', fontSize: 30 }}>{children}</div>
    </>
  );
}
