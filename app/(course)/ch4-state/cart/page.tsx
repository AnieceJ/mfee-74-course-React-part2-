'use client';

import { useState } from 'react';

// 範例能新增的商品
const items = [
  {
    id: 0,
    name: '小熊餅乾',
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
  },
  {
    id: 2,
    name: '小老板海苔',
  },
];

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  // v1 基本的三步驟流程，作物件陣列狀態的更新
  function handleIncreaseClick(productId: any) {
    // 1. 從現有的狀態拷貝出一個新的複本
    // 深拷貝語法(超過一層以上無法用`...`(展開運算子)來拷貝)
    const nextProducts = JSON.parse(JSON.stringify(products));
    // 2. 在複本上作修改
    // 找它是在陣列的哪一個
    const foundIndex = nextProducts.findIndex((v: any) => v.id === productId);
    // 如果有找到
    if (foundIndex !== -1) {
      // 找到後把這個物件的count作+1的動作(理論上會找到，返回索引值)
      nextProducts[foundIndex].count++;
      // 3. 呼叫set方法設定給狀態
      setProducts(nextProducts);
    }
  }

  // v2 改用map來作更新物件陣列狀態
  function handleIncrease2(productId: any) {
    // 1、2步用map方法來作
    const nextProducts = products.map((product) => {
      // 對符合條件的物件增加數量(count)
      if (product.id === productId)
        return { ...product, count: product.count + 1 };
      else return product;
    });

    // 3. 呼叫set方法設定給狀態
    setProducts(nextProducts);
  }

  // v3 改用map更動，最簡潔的語法
  function handleIncrease3(productId: any) {
    setProducts(
      products.map((v) =>
        v.id === productId ? { ...v, count: v.count + 1 } : v
      )
    );
  }

  function handleDecrease(productId: any) {
    // 1、2步用map方法來作
    const nextProducts = products.map((product) => {
      // 對符合條件的物件減少數量(count)
      if (product.id === productId)
        return { ...product, count: product.count - 1 };
      else return product;
    });

    // 3. 呼叫set方法設定給狀態
    setProducts(nextProducts);
  }

  // v1 基本的三步驟流程，作物件陣列狀態的刪除(splice方法)
  function handleRemove1(productId: any) {
    // 1. 從現有的狀態拷貝出一個新的複本
    // 深拷貝語法(超過一層以上無法用`...`(展開運算子)來拷貝)
    const nextProducts = JSON.parse(JSON.stringify(products));
    // 2. 在複本上作修改
    // 找它是在陣列的哪一個
    const foundIndex = nextProducts.findIndex((v: any) => v.id === productId);
    // 如果有找到
    if (foundIndex !== -1) {
      // 找到後把這個物件刪除
      nextProducts.splice(foundIndex, 1);
      // 3. 呼叫set方法設定給狀態
      setProducts(nextProducts);
    }
  }

  // v2 用filter來作刪除
  function handleRemove2(productId: any) {
    // 新的狀態物件陣列裡不會有存在要被刪除的商品
    const nextProducts = products.filter((product) => product.id !== productId);
    // 3. 呼叫set方法設定給狀態
    setProducts(nextProducts);
  }

  // 新增商品到購物車中
  function handleAdd(item: any) {
    // 先尋找要加入的項目是否已經在購物車裡
    const foundIndex = products.findIndex((product) => product.id === item.id);

    if (foundIndex !== -1) {
      // 如果有在購物車裡 -> 作遞增數量
      handleIncrease2(item.id);
    } else {
      // 如果沒在購物車裡 -> 作新增
      const newProduct = { ...item, count: 1 };
      const nextProducts = [newProduct, ...products];
      setProducts(nextProducts);
    }
  }

  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() => {
                  handleAdd(item);
                }}
              >
                加入購物車
              </button>
            </li>
          );
        })}
      </ul>
      <hr />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                handleIncrease3(product.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (product.count === 1) {
                  if (confirm('你確定要刪除這個商品嗎？')) {
                    handleRemove2(product.id);
                  }
                } else {
                  handleDecrease(product.id);
                }
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                if (confirm('你確定要刪除這個商品嗎？')) {
                  handleRemove2(product.id);
                }
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
