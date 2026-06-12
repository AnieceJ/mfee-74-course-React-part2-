'use client';

import { useActionState } from 'react';
// 導入伺服器函式
import { addPost } from '../_actions';
import { AddFormProps } from '../_types';

export default function AddForm({}: AddFormProps) {
  //[伺服器回應狀態, 表單動作, 是否等待中] = useActionState(伺服器函式, 初始狀態)
  const [state, formAction, isPending] = useActionState(addPost, null);

  return (
    <>
      {state && state?.message}
      <form action={formAction}>
        {/* 用簡單的HTML5必填檢查 */}
        標題: <input type="text" name="title" required />
        <br />
        內容:
        <textarea name="content" required></textarea>
        <br />
        <button type="submit">提交</button>
      </form>
    </>
  );
}
