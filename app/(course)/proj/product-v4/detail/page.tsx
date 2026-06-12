'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
// 載入動畫
import CssLoader from '../_components/css-loader';
// 導入專門在網頁一開始就作fetch樣式的鉤子
import { useFetch } from '@/hooks/use-fetch';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

// 資料來源:
const url =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/';

export default function ProductPage() {
  // 如果網址上的設計是 product-v2/detail?id=xxx
  const sp = useSearchParams();
  const id = sp.get('id');
  // 重複利用useFetch寫好的商業邏輯
  const { data, loading } = useFetch<Product | null>(url + id, null);
  const product = data;

  if (loading) {
    return (
      <>
        <CssLoader />
      </>
    );
  }

  return (
    <>
      <h1>商品詳細</h1>
      <Link href="./list">列表</Link>
      <hr />
      <h2>{product?.name}</h2>
      {product?.image_url ? (
        <Image
          src={product.image_url}
          width={200}
          height={200}
          alt={product.name}
          loading="lazy"
        />
      ) : null}

      <p>編號: {product?.id}</p>
      <p>價格: {product?.price}</p>
    </>
  );
}
