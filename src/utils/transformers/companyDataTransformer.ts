import type { CompanyInformation } from '../../types/company';

// Transform core company information
export const transformCoreData = (data: Partial<CompanyInformation>) => ({
  companyName: {
    en: data.companyName?.en || '',
    fr: data.companyName?.fr || '',
  },
  companyOverview: data.companyOverview || '',
  legalName: data.legalName || '',
  status: data.status || 'Active',
  corporationNumber: data.corporationNumber || '',
});

// Transform optional sections
export const transformOptionalData = (data: Partial<CompanyInformation>) => {
  const optionalData: Partial<CompanyInformation> = {};

  // Only include non-empty arrays and defined values
  if (data.addresses?.length) optionalData.addresses = data.addresses;
  if (data.personnel) optionalData.personnel = data.personnel;
  if (data.employeeCounts?.length) optionalData.employeeCounts = data.employeeCounts;
  if (data.keyContacts) optionalData.keyContacts = data.keyContacts;
  if (data.ipPortfolio?.length) optionalData.ipPortfolio = data.ipPortfolio;
  if (data.technology) optionalData.technology = data.technology;
  if (data.financials) optionalData.financials = data.financials;
  if (data.investmentHistory?.length) optionalData.investmentHistory = data.investmentHistory;
  if (data.debtInformation?.length) optionalData.debtInformation = data.debtInformation;
  if (data.projections) optionalData.projections = data.projections;

  return optionalData;
};

// Main transformer function
export const transformCompanyData = (data: Partial<CompanyInformation>) => {
  const coreData = transformCoreData(data);
  const optionalData = transformOptionalData(data);
  
  return {
    ...coreData,
    ...optionalData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};