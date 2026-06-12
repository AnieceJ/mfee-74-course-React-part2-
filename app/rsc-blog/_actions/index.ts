'use server'; // 代表此檔案中的伺服器函式(server function)，程式碼在伺服上執行

// 導入資料庫使用模組
import db from '@/lib/db';
// 重新驗証快取，用於刷新rsc中的獲取的資料
// 例如: revalidatePath('/rsc/blog')
import { revalidatePath } from 'next/cache';
import { ActionState } from '../_types';

// 伺服器函式，第一個傳入參數為目前狀態(或稱為前一個狀態)，第二為表單內容
export async function addPost(
  currentState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  console.log(currentState, formData);
  // 1.由提交的表單得到資料(FormData物件)
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  // 2. 檢查時一樣要回應給前端(AddForm)資訊
  if (title === '' || content === '') {
    return {
      status: 'error',
      message: '缺少必要資料',
      payload: { title, content },
    };
  }

  // 3. 執行資料庫查詢-新增到資料表中
  const [result] = (await db.query(
    `INSERT INTO blog (title, content) VALUES ('${title}', '${content}')`
  )) as [any, any];

  console.log(result);

  // 4. 回應資料(注意不能用try...catch會擋到前端接收結果情況的狀態)
  return {
    status: 'success',
    message: '新增成功',
    payload: { title, content },
  };
}

export async function updatePost(
  currentState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  // 1. 由提交的表單得到資料(FormData物件)
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  // id要轉為數字類型
  const id = Number(formData.get('id'));

  // 2. 檢查資料或驗証
  // 檢查時一樣要回應給前端(AddForm)資訊
  if (title === '' || content === '' || !id) {
    return {
      status: 'error',
      message: '缺少必要資料',
      payload: { title, content, id },
    };
  }

  // 3. 資料庫查詢
  const [result] = (await db.query(
    `UPDATE blog SET title='${title}', content='${content}' WHERE id=${id}`
  )) as [any, any];

  console.log(result);

  // 4. 成功回應
  return {
    status: 'success',
    message: '更新成功',
    payload: { title, content, id },
  };
}

export async function deletePost(
  currentState: ActionState | null,
  formData: FormData
): Promise<ActionState | null> {
  // 1. 由提交的表單得到資料(FormData物件)
  // id要轉為數字類型
  const id = Number(formData.get('id'));

  // 2. 檢查資料或驗証
  // 檢查時一樣要回應給前端(AddForm)資訊
  if (!id) {
    return {
      status: 'error',
      message: '缺少必要資料',
      payload: { id },
    };
  }

  // 3. 資料庫查詢
  const [result] = (await db.query(`DELETE FROM blog WHERE id=${id}`)) as [
    any,
    any,
  ];

  console.log(result);

  // 重新驗証快取，用於刷新rsc中的獲取的資料
  // 注意: 一旦呼叫後，得不到下面的成功回應(主要是刪除表單元件已被移除了)
  revalidatePath('/rsc-blog');

  // 4. 成功回應
  return {
    status: 'success',
    message: '刪除成功',
    payload: { id },
  };
}
