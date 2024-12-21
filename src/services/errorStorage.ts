import type { ErrorLogEntry, ErrorStorageService } from '../types/error';

export class LocalStorageErrorService implements ErrorStorageService {
  private readonly STORAGE_KEY = 'error_logs';
  private readonly MAX_LOGS = 100;

  save(entry: ErrorLogEntry): void {
    try {
      const logs = this.getAll();
      logs.unshift(entry);
      
      // Maintain max logs limit
      if (logs.length > this.MAX_LOGS) {
        logs.length = this.MAX_LOGS;
      }
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
    } catch (e) {
      console.error('Failed to save error log:', e);
      // Attempt to clear storage if it might be full
      try {
        this.clear();
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify([entry]));
      } catch (clearError) {
        console.error('Failed to clear and save error log:', clearError);
      }
    }
  }

  getAll(): ErrorLogEntry[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to retrieve error logs:', e);
      return [];
    }
  }

  clear(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear error logs:', e);
    }
  }
}