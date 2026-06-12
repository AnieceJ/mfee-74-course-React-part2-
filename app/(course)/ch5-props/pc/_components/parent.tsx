'use client';

import Child from './child';

export default function Parent() {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      {/* 由渲染定義的P-C關係 */}
      {/* P-C關係是由"P(父母)"渲染"C(子女)"來決定 */}
      {/* P元件可以利用類似HTML屬性值的指定方式，將值傳遞到C元件中，但不限於字串值 */}
      <Child
        title="目前正在教第5章"
        price={100}
        isConnected={false}
        aa={[1, 2, 3]}
        oa={{ x: 1, y: 2 }}
        sum={(a, b) => a + b}
        jsx={<>hello</>}
      />
    </>
  );
}
