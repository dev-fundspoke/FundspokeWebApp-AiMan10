import { FirebaseError } from '../../errors';
import { ERROR_CODES } from '../../constants';
import type { CompanyFormData } from '../../../../types/company';

export const validateFieldTypes = (data: CompanyFormData) => {
  // Company Name Type Check
  if (data.companyName && (
    typeof data.companyName.en !== 'string' || 
    typeof data.companyName.fr !== 'string'
  )) {
    throw new FirebaseError(
      'Company names must be text',
      ERROR_CODES.VALIDATION_ERROR
    );
  }

  // Corporation Number Type Check
  if (data.corporationNumber && typeof data.corporationNumber !== 'string') {
    throw new FirebaseError(
      'Corporation number must be text',
      ERROR_CODES.VALIDATION_ERROR
    );
  }

  // Optional Fields Type Check
  if (data.sector !== undefined && !Array.isArray(data.sector)) {
    throw new FirebaseError(
      'Sectors must be a list',
      ERROR_CODES.VALIDATION_ERROR
    );
  }
};