import db from '@/lib/db';

interface Post {
  id: number;
  title: string;
  context: string;
}

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
      <ul className="pl-2 list-disc list-inside space-y-3 text-gray-700">
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
}
