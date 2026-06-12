'use client';

import { useState } from 'react';

// 定義商品項目的型別
interface ProductItem {
  id: number;
  name: string;
  price: number;
}

// 定義購買的商品項目的型別
interface CartItem {
  id: number;
  name: string;
  count: number; // 購物車項目才有數量的屬性
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

// 購物車項目的範例
const initialItems: CartItem[] = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
    price: 50,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
    price: 100,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
    price: 150,
  },
];

export default function ShoppingCartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  // 處理遞增: 增加指定商品的數量
  const onIncrease = (itemId: number) => {
    const nextItems = items.map((v) => {
      // v代表每個在陣列中的物件，例如 {id:1, name:'a', count:1}
      if (v.id === itemId) {
        // 對符合條件的物件作修改
        // 用展開運算子作複製物件，並修改count屬性值+1
        return { ...v, count: v.count + 1 };
      } else {
        // 不符條件的直接回傳保持原樣
        return v;
      }
    });

    // 設定到狀態中成為新狀態
    setItems(nextItems);
  };

  // 處理遞減: 減少指定商品的數量
  const onDecrease = (itemId: number) => {
    const nextItems = items.map((v) => {
      // v代表每個在陣列中的物件，例如 {id:1, name:'a', count:1}
      if (v.id === itemId) {
        // 對符合條件的物件作修改
        // 用展開運算子作複製物件，並修改count屬性值-1
        return { ...v, count: v.count - 1 };
      } else {
        // 不符條件的直接回傳保持原樣
        return v;
      }
    });

    // 設定到狀態中成為新狀態
    setItems(nextItems);
  };

  // 處理刪除: 從購物車中刪除指定商品
  const onRemove = (itemId: number) => {
    // 刪除id為itemId
    const nextItems = items.filter((v) => {
      return v.id !== itemId;
    });
    // 設定到狀態中成為新狀態
    setItems(nextItems);
  };

  // 處理新增商品到購物車中
  const onAdd = (product: ProductItem) => {
    // 使用findIndex來尋找是否這個項目已經在購物車裡
    const foundIndex = items.findIndex((v) => v.id === product.id);

    // findIndex會返回找到的索引值(從左開始找)，沒找到則返回 -1
    if (foundIndex !== -1) {
      // 這裡是處理有找到(在購物車裡) ==> 作遞增數量
      onIncrease(product.id);
    } else {
      // 這裡是處理沒找到 ==> 新加入
      // 將商品轉換為購物車項目，並加入預設是 count:1 的屬性
      const newItem = { ...product, count: 1 };
      // 讓新加入的商品在最上面
      const nextItems = [newItem, ...items];
      // 設定到狀態中成為新狀態
      setItems(nextItems);
    }
  };

  // 計算總數量：使用 reduce 方法累加所有商品的數量
  // reduce(累加器函數, 初始值) - acc是累加器，item是當前項目，0是初始值
  const totalQty = items.reduce((acc, item) => acc + item.count, 0);
  // 計算總金額：使用 reduce 方法累加所有商品的總價
  // 每個商品的總價 = 單價 × 數量
  const totalAmount = items.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  return (
    <>
      <h1>商品列表</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name}(NT${product.price})
              <button
                onClick={() => {
                  onAdd(product);
                }}
              >
                加入購物車
              </button>
            </li>
          );
        })}
      </ul>
      <hr />
      <h1>購物車</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} NT${item.price} (<b>{item.count}</b>)
            <button
              onClick={() => {
                onIncrease(item.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                // 如果目前商品數量為1
                if (item.count === 1) {
                  // 作法1: 最少要買一件，所以到商品是1時不再能刪除
                  // alert('最少要購買一件商品!');

                  // 作法2: 再按下去會變為0，所以提示要作刪除
                  // 比較好的使用者體驗，刪除前要加確認視窗
                  if (confirm('你確定要移除這個商品嗎?')) {
                    onRemove(item.id);
                  }
                } else {
                  onDecrease(item.id);
                }
              }}
            >
              –
            </button>
            <button
              onClick={() => {
                // 比較好的使用者體驗，刪除前要加確認視窗
                if (confirm('你確定要移除這個商品嗎?')) {
                  onRemove(item.id);
                }
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <hr />
      {/* 顯示總數量和總金額 */}
      <p>
        總數量: {totalQty} / 總金額: {totalAmount}
      </p>
    </>
  );
}
