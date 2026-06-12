'use client';

import Link from 'next/link';
import { useCart } from '@/context/cart';

// 定義商品項目的型別
interface ProductItem {
  id: number;
  name: string;
  price: number;
}

// 商品資料範例(注意沒有count屬性)
const products: ProductItem[] = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 50,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 100,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 150,
  },
];

export default function ProductPage() {
  // 從自訂鉤子useCart中得到onAdd方法
  const { onAdd } = useCart();

  return (
    <>
      <h1>商品列表</h1>
      <Link href="./cart">連至購物車</Link>
      <hr />
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name}(NT${product.price})
              <button
                onClick={() => {
                  onAdd(product);
                  // 跳出一個加入的提示
                  alert(`${product.name}已成功加入購物車!`);
                }}
              >
                加入購物車
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
