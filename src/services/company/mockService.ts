import { v4 as uuidv4 } from 'uuid';
import type { CompanyFormData } from '../../types/company';

export const mockCreateCompany = async (data: CompanyFormData): Promise<string> => {
  // Log form data for development
  console.log('Development mode - Company data:', {
    ...data,
    timestamp: new Date().toISOString(),
  });

  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock company ID
  return `dev-${uuidv4()}`;
};