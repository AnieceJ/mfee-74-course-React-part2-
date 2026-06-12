'use client';

import { useActionState, useEffect } from 'react';
import { updatePost } from '../_actions';
// 導入useRouter
import { useRouter } from 'next/navigation';
import { UpdateFormProps } from '../_types';

export default function UpdateForm({ post = {} }: UpdateFormProps) {
  // [伺服器函式回應狀態, 表單動作, 是否正在等候回應中] = useActionState(伺服器函式, 初始狀態)
  const [state, formAction, isPending] = useActionState(updatePost, null);

  console.log(state);

  // 宣告路由器
  // const router = useRouter()

  // // 狀態連鎖，控制重新載入RSC資料
  // useEffect(() => {
  //   if (state?.status === 'success') {
  //     // 重新渲染RSC資料
  //     router.refresh()
  //   }
  // }, [state])

  return (
    <>
      <p>{state && state.message}</p>
      <form action={formAction}>
        標題:
        <input
          type="text"
          name="title"
          defaultValue={state ? state?.payload?.title : post.title}
        />
        <br />
        內容:
        <textarea
          name="content"
          defaultValue={state ? state?.payload?.content : post.content}
        />
        <br />
        {/* 代表要更新的文章id */}
        <input type="hidden" name="id" defaultValue={post.id} />
        <button type="submit">修改</button>
      </form>
    </>
  );
}
