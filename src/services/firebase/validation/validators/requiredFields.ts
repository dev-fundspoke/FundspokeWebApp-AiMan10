import { FirebaseError } from '../../errors';
import { ERROR_CODES } from '../../constants';
import type { CompanyFormData } from '../../../../types/company';

export const validateRequiredFields = (data: CompanyFormData) => {
  const requiredFields = {
    'Company Name (English)': data.companyName?.en?.trim(),
    'Company Name (French)': data.companyName?.fr?.trim(),
    'Corporation Number': data.corporationNumber?.trim(),
  };

  const missingFields = Object.entries(requiredFields)
    .filter(([_, value]) => !value)
    .map(([field]) => field);

  if (missingFields.length > 0) {
    throw new FirebaseError(
      `Please fill in the following required fields: ${missingFields.join(', ')}`,
      ERROR_CODES.VALIDATION_ERROR
    );
  }
};