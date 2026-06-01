'use client';

import ChildA from './child-a';
import ChildB from './child-b';

export default function Parent() {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      <ChildA />
      <ChildB />
    </>
  );
}
