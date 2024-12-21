import { logger } from './logger';
import type { ErrorLogEntry } from '../types/error';

export const checkCurrentLogs = (): {
  hasErrors: boolean;
  errors: ErrorLogEntry[];
  summary: string;
} => {
  const logs = logger.getLogs();
  
  if (logs.length === 0) {
    return {
      hasErrors: false,
      errors: [],
      summary: 'No errors found in the logs.'
    };
  }

  return {
    hasErrors: true,
    errors: logs,
    summary: `Found ${logs.length} error(s) in the logs:\n${logs.map(log => 
      `- [${log.severity}] ${log.message} (${log.timestamp})`
    ).join('\n')}`
  };
};