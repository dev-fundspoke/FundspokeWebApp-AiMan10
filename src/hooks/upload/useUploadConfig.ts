import type { UploadOptions } from '../../types/upload';

export const useUploadConfig = (type: 'logo' | 'document' | 'image'): UploadOptions => {
  const configs: Record<string, UploadOptions> = {
    logo: {
      maxFiles: 1,
      allowedTypes: ['image/jpeg', 'image/png', 'image/svg+xml'],
      maxSize: 5 * 1024 * 1024, // 5MB
      generatePreview: true,
    },
    document: {
      maxFiles: 10,
      allowedTypes: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ],
      maxSize: 10 * 1024 * 1024, // 10MB
      generatePreview: false,
    },
    image: {
      maxFiles: 5,
      allowedTypes: ['image/jpeg', 'image/png', 'image/svg+xml', 'image/gif'],
      maxSize: 5 * 1024 * 1024, // 5MB
      generatePreview: true,
    }
  };

  return configs[type];
};