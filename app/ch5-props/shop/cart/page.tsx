'use client';

import Link from 'next/link';

export interface CartPageProps {}

export default function CartPage({}: CartPageProps) {
  return (
    <>
      <h1>購物車</h1>
      <Link href="./product">連至商品列表</Link>
      {/* <br />
      <a href="./product">連至商品列表(a標記)</a> */}
      <hr />
    </>
  );
}
