'use client';

import Parent from './_components/parent';
import Child from './_components/child';

export default function ChildrenPage() {
  return (
    <>
      <h1>props.children範例</h1>
      <hr />
      {/* 沒有 children 時不顯示任何東西 */}
      <Parent></Parent>
      {/* children是某個字串 */}
      <Parent>Hello</Parent>
      {/* children是某些其它元件 */}
      <Parent>
        <Child />
        <Child />
      </Parent>
    </>
  );
}
