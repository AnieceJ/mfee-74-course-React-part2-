'use client';

// 導入時就自動轉為JS資料格式
import products from './_data/products.json';
// 導入next提供的有自動圖片最佳化的元件
import Image from 'next/image';
// 導入css樣式
import './_styles/product-table.css';

export default function ProductTablePage() {
  // console.log(products);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {/* 常用的map撰寫風格： 英文複數名詞 map 單數名詞 */}
          {/* 例如: products -> product */}
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <Image
                    src="/product/photo-1.webp"
                    width={100}
                    height={100}
                    alt={product.name}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
