import { useState, useCallback } from 'react';
import { showMessage } from '../components/common/ThemedMessage';

interface RetryOptions {
  maxAttempts?: number;
  delayMs?: number;
}

export const useFormRetry = (options: RetryOptions = {}) => {
  const { maxAttempts = 3, delayMs = 1000 } = options;
  const [attempts, setAttempts] = useState(0);

  const retry = useCallback(<T,>(operation: () => Promise<T>) => {
    const retryOperation = async (): Promise<T> => {
      try {
        const result = await operation();
        setAttempts(0);
        return result;
      } catch (error) {
        if (attempts >= maxAttempts - 1) {
          setAttempts(0);
          throw error;
        }

        setAttempts((prev) => prev + 1);
        showMessage.warning(`Retrying operation (${attempts + 1}/${maxAttempts})...`);

        await new Promise((resolve) => setTimeout(resolve, delayMs));
        return retryOperation();
      }
    };

    return retryOperation();
  }, [attempts, maxAttempts, delayMs]);

  return { retry, attempts };
};