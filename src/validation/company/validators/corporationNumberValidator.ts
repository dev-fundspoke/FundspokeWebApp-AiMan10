import { FirebaseError } from '../../../services/firebase/errors';
import { ERROR_CODES } from '../../../services/firebase/constants';

export const validateCorporationNumber = (corporationNumber?: string): void => {
  if (!corporationNumber) {
    throw new FirebaseError(
      'Corporation number is required',
      ERROR_CODES.VALIDATION_ERROR,
      { field: ['corporationNumber'] }
    );
  }

  const corpNumberRegex = /^[A-Z0-9-]+$/;
  if (!corpNumberRegex.test(corporationNumber)) {
    throw new FirebaseError(
      'Corporation number must contain only uppercase letters, numbers, and hyphens',
      ERROR_CODES.VALIDATION_ERROR,
      { field: ['corporationNumber'] }
    );
  }

  if (corporationNumber.length < 4 || corporationNumber.length > 20) {
    throw new FirebaseError(
      'Corporation number must be between 4 and 20 characters',
      ERROR_CODES.VALIDATION_ERROR,
      { field: ['corporationNumber'] }
    );
  }
};