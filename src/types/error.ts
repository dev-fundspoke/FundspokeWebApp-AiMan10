export interface ErrorLogOptions {
  severity?: 'ERROR' | 'WARNING' | 'INFO';
  component?: string;
  context?: Record<string, unknown>;
}

export interface ErrorLogEntry {
  id: string;
  timestamp: string;
  message: string;
  stack?: string;
  severity: ErrorLogOptions['severity'];
  component?: string;
  type?: string;
  context?: Record<string, unknown>;
}