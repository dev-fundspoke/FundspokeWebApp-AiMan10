interface FileValidationOptions {
  allowedTypes: string[];
  maxSize: number;
}

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateFile = (file: File, options: FileValidationOptions): ValidationResult => {
  // Check file type
  if (!options.allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `File type not supported. Please upload ${options.allowedTypes.join(', ')} files only.`
    };
  }

  // Check file size
  if (file.size > options.maxSize) {
    const maxSizeMB = options.maxSize / (1024 * 1024);
    return {
      isValid: false,
      error: `File must be smaller than ${maxSizeMB}MB`
    };
  }

  return { isValid: true };
};