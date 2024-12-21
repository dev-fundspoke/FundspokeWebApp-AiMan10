import type { CompanyInformation } from '../../types/company';

export interface FileMetadata {
  id: string;
  name: string;
  size: number;
  type: string;
  category: string;
  url: string;
  uploadedAt: string;
  deletedAt?: string;
}

export interface CompanyServiceError extends Error {
  code: string;
  context?: Record<string, unknown>;
}

export interface FileUploadResult {
  url: string;
  metadata: FileMetadata;
}