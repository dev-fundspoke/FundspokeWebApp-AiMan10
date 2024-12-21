import type { CompanyFormData } from '../../../types/company';

export const cleanCompanyData = (data: CompanyFormData): CompanyFormData => {
  // Create a new object with cleaned data
  const cleanedData: Partial<CompanyFormData> = {
    companyName: {
      en: data.companyName.en.trim(),
      fr: data.companyName.fr.trim(),
    },
    corporationNumber: data.corporationNumber.trim(),
    organizationType: data.organizationType,
  };

  // Clean optional fields
  if (data.companyOverview) {
    cleanedData.companyOverview = data.companyOverview.trim();
  }

  if (data.legalName) {
    cleanedData.legalName = data.legalName.trim();
  }

  if (Array.isArray(data.sector)) {
    cleanedData.sector = data.sector.filter(Boolean);
  }

  // Clean nested objects if they exist
  if (data.addresses?.length) {
    cleanedData.addresses = data.addresses.map(addr => ({
      ...addr,
      address: {
        ...addr.address,
        line1: addr.address.line1.trim(),
        line2: addr.address.line2?.trim(),
        city: addr.address.city.trim(),
        state: addr.address.state.trim(),
        zipCode: addr.address.zipCode.trim(),
        country: addr.address.country?.trim() || 'Canada',
      }
    }));
  }

  return cleanedData as CompanyFormData;
};