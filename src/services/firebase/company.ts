import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './init';
import { FirebaseError } from './errors';
import { COLLECTIONS, ERROR_CODES } from './constants';
import { transformCompanyData } from '../../utils/transformers/companyTransformer';
import type { CompanyInformation } from '../../types/company';

export const createCompany = async (data: Partial<CompanyInformation>): Promise<string> => {
  try {
    // Create a new document reference
    const companyRef = doc(collection(db, COLLECTIONS.COMPANIES));
    
    // Transform and validate data
    const companyData = transformCompanyData({
      ...data,
      id: companyRef.id,
    });

    // Write to Firestore
    await setDoc(companyRef, companyData);
    
    return companyRef.id;
  } catch (error) {
    console.error('Error creating company:', error);
    if (error instanceof Error) {
      throw new FirebaseError(
        'Failed to create company: ' + error.message,
        ERROR_CODES.CREATE_COMPANY,
        { originalError: error }
      );
    }
    throw new FirebaseError(
      'Failed to create company',
      ERROR_CODES.CREATE_COMPANY
    );
  }
};