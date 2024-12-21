import type { UploadFile } from 'antd/es/upload/interface';

export interface UploadState {
  fileList: UploadFile[];
  previewUrl?: string;
}

export interface UploadOptions {
  maxFiles?: number;
  allowedTypes: string[];
  maxSize: number;
  generatePreview?: boolean;
}

export interface UploadHandlers {
  beforeUpload: (file: File) => boolean | Upload.LIST_IGNORE;
  handleRemove: (file: UploadFile) => boolean;
  onChange?: (files: File[]) => void;
}