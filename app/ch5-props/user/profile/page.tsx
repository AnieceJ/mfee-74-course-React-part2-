'use client';

import { useUser } from '@/context/user';
import Link from 'next/link';

export default function ProfilePage() {
  // 使用context
  const { user } = useUser();
  return (
    <>
      <h1>個人資料</h1>
      <Link href="./login">會員登入</Link>
      <hr />
      <p>姓名：{user?.name}</p>
      <p>Email：{user?.email}</p>
    </>
  );
}
