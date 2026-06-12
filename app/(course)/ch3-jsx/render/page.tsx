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
      {[1, 2, 3]}
      {['a', 'b']}
      {/* 在陣列中的jsx項目需要key屬性 */}
      {/* key相當於react中清單項目的id(身份証) */}
      {[<p key="1">x</p>, <p key="2">y</p>]}
      <h2>物件object</h2>
      {/* 物件無法直接渲染，會出現程式錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      {/* 可以轉為JSON字串進行渲染 */}
      {JSON.stringify({ a: 1, b: 2 })}
    </>
  );
}
