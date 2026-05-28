'use client';

export default function RenderPage() {
  return (
    <>
      <h1>JSX渲染(render)範例</h1>
      <hr />
      <h2>數字number</h2>
      {1 - 1}
      {NaN}
      <h2>字串string</h2>
      這是字串
      {'這也是字串'}
      {`這也是${1 + 1}字串`}
      <h2>布林值boolean</h2>
      {/* 不會渲染呈現 */}
      {true}
      {false}
      <h2>null/undefined</h2>
      {/* 不會渲染呈現 */}
      {null}
      {undefined}
      <h2>陣列array</h2>
      <h2>物件object</h2>
    </>
  );
}
