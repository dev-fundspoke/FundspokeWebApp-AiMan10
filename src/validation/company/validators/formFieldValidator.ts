import { FirebaseError } from '../../../services/firebase/errors';
import { ERROR_CODES } from '../../../services/firebase/constants';
import type { CompanyFormData } from '../../../types/company';

interface ValidationError {
  field: string[];
  message: string;
}

const validateField = (value: any, fieldPath: string[]): ValidationError | null => {
  // Skip validation for optional fields
  if (value === undefined || value === null) {
    return null;
  }

  // Validate nested objects
  if (typeof value === 'object' && !Array.isArray(value)) {
    for (const [key, nestedValue] of Object.entries(value)) {
      const error = validateField(nestedValue, [...fieldPath, key]);
      if (error) return error;
    }
  }

  // Validate string fields
  if (typeof value === 'string' && !value.trim()) {
    return {
      field: fieldPath,
      message: `${fieldPath[fieldPath.length - 1]} is required`,
    };
  }

  return null;
};

export const validateFormFields = (data: CompanyFormData): void => {
  // Required fields with their paths
  const requiredFields = [
    ['companyName', 'en'],
    ['companyName', 'fr'],
    ['corporationNumber'],
    ['organizationType'],
  ];

  for (const fieldPath of requiredFields) {
    let value = data;
    for (const key of fieldPath) {
      value = value?.[key];
    }

    if (!value) {
      throw new FirebaseError(
        `${fieldPath.join('.')} is required`,
        ERROR_CODES.VALIDATION_ERROR,
        { field: fieldPath }
      );
    }

    const error = validateField(value, fieldPath);
    if (error) {
      throw new FirebaseError(
        error.message,
        ERROR_CODES.VALIDATION_ERROR,
        { field: error.field }
      );
    }
  }
};