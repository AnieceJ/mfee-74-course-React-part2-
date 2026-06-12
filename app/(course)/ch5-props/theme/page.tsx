'use client'; // 意義是在客戶端使用，代表這個檔案中的元件是`客戶端元件(RCC)`
// 如果沒有寫'use client'就是 `伺服器元件(RSC)`

// 導入context專用的自訂名稱鉤子
import { useTheme } from '@/context/theme';

export default function HomePage() {
  // 所有Provider下面的元件(頁面也是)可以用這方式得到context中的value
  const { theme } = useTheme();

  const color = theme === 'dark' ? 'white' : 'black';
  const bgColor = theme === 'dark' ? 'black' : 'white';

  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundColor: bgColor,
          color: color,
        }}
      >
        <h1>佈景測試頁</h1>
        <p>這裡有一些文字</p>
      </div>
    </>
  );
}
