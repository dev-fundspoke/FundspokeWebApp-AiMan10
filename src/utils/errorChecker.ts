import { logger } from './logger';
import type { ErrorLogEntry } from '../types/error';

export const checkErrorLogs = (): {
  hasErrors: boolean;
  errors: ErrorLogEntry[];
  summary: string;
} => {
  const logs = logger.getLogs();
  
  return {
    hasErrors: logs.length > 0,
    errors: logs,
    summary: logs.length === 0 
      ? 'No errors found in the logs.'
      : `Found ${logs.length} error(s) in the logs.`
  };
};