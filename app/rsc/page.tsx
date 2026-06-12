import db from '@/lib/db';

// 導入客戶端元件
import ListClient from './_components/list.client';
// 導入類型
import { Post } from './_types';

export default async function RscPage() {
  // 執行sql
  const [posts] = (await db.query(`SELECT * FROM blog`)) as [Post[], any];
  console.log(posts);

  return (
    <>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
        文章列表(RSC)
      </h1>
      <hr />
      {/* 傳遞資料給客戶端元件 */}
      <ListClient posts={posts} />
    </>
  );
}
