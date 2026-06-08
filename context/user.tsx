// 第1步 建立context
'use client'; // context與Provider元件是客戶端元件的應用

import { createContext, useState, useContext } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => string;
  logout: () => string;
  isLoggedIn: boolean;
}

// 使用 null 作為預設值，這是 React Context 的常見做法
const UserContext = createContext<UserContextType | null>(null);
// 設定context的名稱，這是會在react devtools(瀏覽器擴充)上面會看到，方便除錯用(可選的)
UserContext.displayName = 'UserContext';

// 第3-1步，建立Provider元件
export function UserProvider({ children }: { children: React.ReactNode }) {
  // 初始會員物件(預設會員物件)
  const initUser = { id: 0, name: '', email: '', password: '' };
  // 定義會員狀態
  const [user, setUser] = useState<User>(initUser);
  // 判斷會員是否登入
  const isLoggedIn = Boolean(user.id);

  // 登入
  const login = (email: string, password: string): string => {
    if (email === 'abc@aa.com' && password === '12345') {
      setUser({
        id: 1,
        name: 'Jane Doe',
        email: 'abc@aa.com',
        password: '12345',
      });
      return 'success';
    } else {
      return 'fail';
    }
  };

  // 登出
  const logout = (): string => {
    setUser(initUser);
    return 'success';
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// 自訂名稱鉤子(先包裝useContext+UserContext)
export const useUser = () => {
  // 從context值中解構出value中的值和切換函式
  const context = useContext(UserContext);

  if (!context) {
    throw Error('it must be used within UserProvider');
  }

  return context;
};
