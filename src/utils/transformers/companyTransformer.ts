import type { CompanyInformation } from '../../types/company';

export const transformCompanyData = (data: Partial<CompanyInformation>) => {
  // Remove undefined values and empty arrays
  const cleanData = Object.entries(data).reduce((acc, [key, value]) => {
    if (value === undefined) return acc;
    if (Array.isArray(value) && value.length === 0) return acc;
    if (value === null) return acc;
    return { ...acc, [key]: value };
  }, {});

  // Ensure required fields have valid values
  return {
    ...cleanData,
    companyName: {
      en: cleanData.companyName?.en || '',
      fr: cleanData.companyName?.fr || '',
    },
    status: cleanData.status || 'Active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};