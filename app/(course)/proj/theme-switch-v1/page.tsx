'use client';

import { useTheme } from './_context/theme';
import ThemeToggle from './_components/theme-toggle';

export default function ThemeSwitchV1() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Tailwind CSS Dark Mode Demo
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          透過 Tailwind 的 dark: variant 實現佈景切換
        </p>

        <ThemeToggle />

        {/* Theme-aware card */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            當前主題：{theme === 'dark' ? '暗黑' : '明亮'}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            此卡片會根據選取的佈景自動切換樣式。
          </p>

          {/* Button variants */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              Primary
            </button>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors">
              Secondary
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors">
              Outline
            </button>
          </div>
        </div>

        {/* Color palette demo */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              文字顏色
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
              次要文字
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              邊框樣式
            </h3>
            <div className="mt-2 h-8 rounded border border-gray-300 dark:border-gray-600 transition-colors" />
          </div>
        </div>

        {/* List demo */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
            列表項目
          </h3>
          <ul className="space-y-2">
            {['React', 'Next.js', 'Tailwind CSS'].map((item) => (
              <li
                key={item}
                className="px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form elements demo */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
            表單元件
          </h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="輸入文字..."
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
            />
            <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors">
              <option>選項 1</option>
              <option>選項 2</option>
              <option>選項 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
