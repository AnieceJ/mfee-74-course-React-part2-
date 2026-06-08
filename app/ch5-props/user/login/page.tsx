'use client';

import { useState } from 'react';
import { useUser } from '@/context/user';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 使用context
  const { isLoggedIn, login, logout } = useUser();

  // 宣告一個路由器
  const router = useRouter();

  return (
    <>
      <h1>會員登入</h1>
      <Link href="./profile">個人資料</Link>
      <hr />
      <div>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          // 登入時disable文字輸入框
          disabled={isLoggedIn}
        />
      </div>
      <div>
        密碼
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          // 登入時disable文字輸入框
          disabled={isLoggedIn}
        />
      </div>
      <div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              const result = logout();
              if (result === 'success') {
                alert('你已成功登出');
              }
            }}
          >
            登出
          </button>
        ) : (
          <button
            onClick={() => {
              const result = login(email, password);
              if (result === 'success') {
                if (confirm('歡迎!要跳轉到個人資料頁嗎？')) {
                  // 跳轉到個人資料頁
                  router.push('./profile');
                }
              } else {
                alert('登入失敗!email或密碼有錯誤!');
              }
            }}
          >
            登入
          </button>
        )}
      </div>
    </>
  );
}
