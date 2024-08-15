import { useCallback, useRef } from 'react';

export const useDebouncedCallback = (func, delay) => {
  const timeout = useRef();

  return useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, delay);
    },
    [func, delay],
  );
};
