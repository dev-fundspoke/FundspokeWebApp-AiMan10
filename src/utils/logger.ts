import { v4 as uuidv4 } from 'uuid';
import type { ErrorLogEntry, ErrorLogOptions, ErrorStorageService } from '../types/error';
import { LocalStorageErrorService } from '../services/errorStorage';

export enum ErrorSeverity {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO'
}

export class Logger {
  private static instance: Logger;
  private logs: ErrorLogEntry[] = [];
  private storage: ErrorStorageService;
  private readonly MAX_LOGS = 100;

  private constructor() {
    this.storage = new LocalStorageErrorService();
    this.loadLogsFromStorage();
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private loadLogsFromStorage(): void {
    try {
      this.logs = this.storage.getAll();
    } catch (error) {
      console.error('Failed to load logs from storage:', error);
      this.logs = [];
    }
  }

  logError(error: Error, options?: ErrorLogOptions): ErrorLogEntry {
    const entry: ErrorLogEntry = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      message: error.message,
      stack: error.stack,
      severity: options?.severity || ErrorSeverity.ERROR,
      component: options?.component,
      type: error.name,
      context: options?.context
    };

    // Add to memory
    this.logs.unshift(entry);
    
    // Maintain max logs limit
    if (this.logs.length > this.MAX_LOGS) {
      this.logs = this.logs.slice(0, this.MAX_LOGS);
    }

    // Save to storage
    try {
      this.storage.save(entry);
    } catch (storageError) {
      console.error('Failed to save error log:', storageError);
    }

    // Notify in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', entry);
    }

    return entry;
  }

  getLogs(): ErrorLogEntry[] {
    return this.logs;
  }

  clearLogs(): void {
    this.logs = [];
    this.storage.clear();
  }

  getLogsByComponent(component: string): ErrorLogEntry[] {
    return this.logs.filter(log => log.component === component);
  }

  getLogsBySeverity(severity: ErrorSeverity): ErrorLogEntry[] {
    return this.logs.filter(log => log.severity === severity);
  }
}

export const logger = Logger.getInstance();

export const logError = (
  error: Error,
  component?: string,
  context?: Record<string, unknown>
): ErrorLogEntry => {
  return logger.logError(error, { component, context });
};