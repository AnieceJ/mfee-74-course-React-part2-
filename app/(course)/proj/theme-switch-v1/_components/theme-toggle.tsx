'use client';

import { useTheme } from '../_context/theme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg font-medium
        transition-colors duration-200
        bg-gray-200 text-gray-700
        dark:bg-gray-700 dark:text-gray-200
        hover:bg-gray-300 dark:hover:bg-gray-600
      `}
    >
      {theme === 'dark' ? (
        <>
          <span className="text-lg">☀️</span>
          <span>切換為明亮模式</span>
        </>
      ) : (
        <>
          <span className="text-lg">🌙</span>
          <span>切換為暗黑模式</span>
        </>
      )}
    </button>
  );
}
