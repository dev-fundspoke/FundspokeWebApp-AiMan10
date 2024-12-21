export interface FileValidationOptions {
  allowedTypes: string[];
  maxSize: number;
  minSize?: number;
  maxFiles?: number;
}

export interface FileUploadState {
  fileList: File[];
  uploading: Record<string, number>;
  error?: string;
}