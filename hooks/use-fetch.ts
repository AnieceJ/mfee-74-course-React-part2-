import { useState, useEffect } from 'react';

export function useFetch<T>(
  url: string,
  initValue: T,
  loaderMs: number = 1500, // 載入指示關閉時間ms，預設1500
  option?: RequestInit
) {
  const [data, setData] = useState<T | null>(initValue || null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url, option);
        const resData = await res.json();
        setData(resData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('unknown error'));
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, loaderMs);
      }
    };
    // 呼叫函式
    getData();
  }, [url, loaderMs, option]);

  return { data, loading, error };
}
