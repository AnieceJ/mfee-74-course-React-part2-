'use client';

import { useActionState } from 'react';
import { deletePost } from '../_actions';
import { DeleteFormProps } from '../_types';

export default function DeleteForm({ id }: DeleteFormProps) {
  // [伺服器函式回應狀態, 表單動作, 是否正在等候回應中] = useActionState(伺服器函式, 初始狀態)
  const [state, formAction, isPending] = useActionState(deletePost, null);

  console.log(state);

  return (
    <>
      <form action={formAction}>
        <input type="hidden" name="id" value={id} />
        <button type="submit">刪除</button>
      </form>
    </>
  );
}
