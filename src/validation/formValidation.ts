import { FirebaseError } from '../services/firebase/errors';
import { ERROR_CODES } from '../services/firebase/constants';
import type { CompanyFormData } from '../types/company';

export const validateForm = async (data: CompanyFormData): Promise<CompanyFormData> => {
  // Validate required fields
  if (!data.companyName?.en || !data.companyName?.fr) {
    throw new FirebaseError(
      'Company name is required in both English and French',
      ERROR_CODES.VALIDATION_ERROR,
      { field: ['companyName'] }
    );
  }

  if (!data.corporationNumber) {
    throw new FirebaseError(
      'Corporation number is required',
      ERROR_CODES.VALIDATION_ERROR,
      { field: ['corporationNumber'] }
    );
  }

  // Clean and validate data
  const cleanedData: CompanyFormData = {
    ...data,
    companyName: {
      en: data.companyName.en.trim(),
      fr: data.companyName.fr.trim(),
    },
    corporationNumber: data.corporationNumber.trim(),
    sector: Array.isArray(data.sector) ? data.sector : [],
  };

  // Add optional fields if they exist
  if (data.companyOverview) {
    cleanedData.companyOverview = data.companyOverview.trim();
  }

  if (data.legalName) {
    cleanedData.legalName = data.legalName.trim();
  }

  return cleanedData;
};