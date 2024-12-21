import { logger } from '../utils/logger';
import type { ErrorLogOptions } from '../types/error';

export const useErrorLogging = (defaultComponent?: string) => {
  const logError = (
    error: Error,
    options?: Omit<ErrorLogOptions, 'component'>
  ) => {
    return logger.logError(error, {
      ...options,
      component: defaultComponent
    });
  };

  return { logError };
};