'use client';

import MyInputId from './_components/my-input-id';
import MyInputRefs from './_components/my-input-refs';

export default function UncontrolledPage() {
  return (
    <>
      <h1>不可控表單元件範例(uncontrolled)</h1>
      <hr />
      <MyInputId />
      <MyInputId />
      <hr />
      <MyInputRefs />
      <MyInputRefs />
    </>
  );
}
