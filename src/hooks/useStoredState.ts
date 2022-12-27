import { useEffect, useRef, useState } from "react";

export function useStoredState<T>(key: string, initialValue: T) {
  const lastKeyRef = useRef(key);
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      if (storedValue !== null) {
        return JSON.parse(storedValue) as T;
      }

      return initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (lastKeyRef.current !== key) {
      localStorage.removeItem(lastKeyRef.current);
    }

    lastKeyRef.current = key;
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
