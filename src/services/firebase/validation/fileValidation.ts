import { FirebaseError } from '../errors';
import { ERROR_CODES, MAX_FILE_SIZES, ALLOWED_FILE_TYPES } from '../constants';

export const validateFile = (
  file: File,
  type: 'LOGO' | 'DOCUMENT' | 'FINANCIAL_STATEMENT'
) => {
  // Check file size
  const maxSize = MAX_FILE_SIZES[type];
  if (file.size > maxSize) {
    throw new FirebaseError(
      `File size exceeds maximum allowed size of ${maxSize / (1024 * 1024)}MB`,
      ERROR_CODES.VALIDATION_ERROR
    );
  }

  // Check file type
  const allowedTypes = type === 'LOGO' 
    ? ALLOWED_FILE_TYPES.IMAGES 
    : ALLOWED_FILE_TYPES.DOCUMENTS;

  if (!allowedTypes.includes(file.type)) {
    throw new FirebaseError(
      `File type ${file.type} is not allowed. Allowed types: ${allowedTypes.join(', ')}`,
      ERROR_CODES.VALIDATION_ERROR
    );
  }

  return true;
};

export const validateFiles = (
  files: Record<string, File[]>
): void => {
  Object.entries(files).forEach(([category, categoryFiles]) => {
    categoryFiles.forEach(file => {
      const type = category === 'logo' ? 'LOGO' : 'DOCUMENT';
      validateFile(file, type);
    });
  });
};