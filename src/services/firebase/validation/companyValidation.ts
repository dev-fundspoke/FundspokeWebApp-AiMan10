import { FirebaseError } from '../errors';
import { ERROR_CODES } from '../constants';
import { validateRequiredFields } from './validators/requiredFields';
import { validateFieldTypes } from './validators/fieldTypes';
import { cleanCompanyData } from './validators/dataCleaner';
import type { CompanyFormData, CompanyDocument } from '../../../types/company';

export const validateCompanyData = (data: CompanyFormData): CompanyDocument => {
  try {
    // Step 1: Validate required fields
    validateRequiredFields(data);

    // Step 2: Validate field types
    validateFieldTypes(data);

    // Step 3: Clean and transform data
    return cleanCompanyData(data);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    }
    throw new FirebaseError(
      'Form validation failed: ' + (error instanceof Error ? error.message : 'Unknown error'),
      ERROR_CODES.VALIDATION_ERROR
    );
  }
};