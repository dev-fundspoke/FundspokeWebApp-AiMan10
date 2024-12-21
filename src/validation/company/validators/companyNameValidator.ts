import { FirebaseError } from '../../../services/firebase/errors';
import { ERROR_CODES } from '../../../services/firebase/constants';
import type { CompanyName } from '../../../types/company';

export const validateCompanyName = (companyName?: CompanyName): void => {
  if (!companyName?.en || !companyName?.fr) {
    throw new FirebaseError(
      'Company name is required in both English and French',
      ERROR_CODES.VALIDATION_ERROR,
      { field: ['companyName'] }
    );
  }

  const minLength = 2;
  const maxLength = 100;

  if (companyName.en.length < minLength || companyName.fr.length < minLength) {
    throw new FirebaseError(
      `Company names must be at least ${minLength} characters long`,
      ERROR_CODES.VALIDATION_ERROR,
      { field: ['companyName'] }
    );
  }

  if (companyName.en.length > maxLength || companyName.fr.length > maxLength) {
    throw new FirebaseError(
      `Company names cannot exceed ${maxLength} characters`,
      ERROR_CODES.VALIDATION_ERROR,
      { field: ['companyName'] }
    );
  }

  const nameRegex = /^[a-zA-Z0-9\s\-&.]+$/;
  if (!nameRegex.test(companyName.en) || !nameRegex.test(companyName.fr)) {
    throw new FirebaseError(
      'Company names can only contain letters, numbers, spaces, and the characters: - & .',
      ERROR_CODES.VALIDATION_ERROR,
      { field: ['companyName'] }
    );
  }
};