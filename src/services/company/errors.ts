import type { CompanyServiceError } from './types';

export class CompanyError extends Error implements CompanyServiceError {
  code: string;
  context?: Record<string, unknown>;

  constructor(message: string, code: string, context?: Record<string, unknown>) {
    super(message);
    this.name = 'CompanyError';
    this.code = code;
    this.context = context;
  }
}

export const CompanyErrorCodes = {
  UPLOAD_FAILED: 'UPLOAD_FAILED',
  CREATE_FAILED: 'CREATE_FAILED',
  UPDATE_FAILED: 'UPDATE_FAILED',
  NOT_FOUND: 'NOT_FOUND',
  INVALID_DATA: 'INVALID_DATA',
} as const;