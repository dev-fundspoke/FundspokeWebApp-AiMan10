import { validateCompanyName } from './validators/companyNameValidator';
import { validateCorporationNumber } from './validators/corporationNumberValidator';
import { validateFormFields } from './validators/formFieldValidator';
import { cleanCompanyData } from './validators/dataCleaner';
import type { CompanyFormData } from '../../types/company';

// Re-export validators for external use
export { validateCompanyName, validateCorporationNumber, validateFormFields, cleanCompanyData };

// Main validation function that orchestrates all validations
export const validateCompanyData = async (data: CompanyFormData): Promise<CompanyFormData> => {
  // Step 1: Validate individual required fields
  validateCompanyName(data.companyName);
  validateCorporationNumber(data.corporationNumber);

  // Step 2: Validate form structure and required fields
  validateFormFields(data);

  // Step 3: Clean and transform data
  return cleanCompanyData(data);
};