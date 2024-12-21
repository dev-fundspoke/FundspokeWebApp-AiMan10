import { Timestamp } from 'firebase/firestore';
import type { CompanyFormData, CompanyDocument } from '../../../../types/company';

export const cleanCompanyData = (data: CompanyFormData): CompanyDocument => {
  const cleanedData: CompanyDocument = {
    companyName: {
      en: data.companyName.en.trim(),
      fr: data.companyName.fr.trim(),
    },
    corporationNumber: data.corporationNumber.trim(),
    organizationType: data.organizationType || 'For Profit',
    sector: Array.isArray(data.sector) ? data.sector : [],
    totalEmployeeCount: 0,
    aiAnalysis: {
      aiAnalysisReady: false,
      aiReadinessDetails: '',
      aiAnalysisDate: Timestamp.now(),
      aiImprovementRecommendations: '',
    },
    grantMatchScore: 0,
    queryPerformanceScore: 0,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  };

  // Clean optional fields
  if (data.companyOverview?.trim()) {
    cleanedData.companyOverview = data.companyOverview.trim();
  }

  if (data.legalName?.trim()) {
    cleanedData.legalName = data.legalName.trim();
  }

  return cleanedData;
};