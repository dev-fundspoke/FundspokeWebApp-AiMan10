import { doc, setDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../init';
import { validateCompanyData } from '../validation/companyValidation';
import { uploadCompanyFiles } from '../storage/fileUpload';
import { createSubcollections } from './subcollections';
import { FirebaseError } from '../errors';
import { ERROR_CODES } from '../constants';
import { transformForFirestore } from '../utils/dataTransformer';
import type { CompanyFormData } from '../../../types/company';

export const createCompany = async (data: CompanyFormData): Promise<string> => {
  try {
    // Validate company data
    const validatedData = validateCompanyData(data);
    
    // Create company document reference
    const companyRef = doc(collection(db, 'companies'));
    const companyId = companyRef.id;

    // Handle file uploads if present
    const files = {
      logo: data.logo ? [data.logo] : [],
      documents: data.documents || [],
      financialStatements: data.financials?.statements || [],
    };

    const uploadResults = await uploadCompanyFiles(companyId, files);

    // Prepare document data with file URLs
    const documentData = {
      ...validatedData,
      id: companyId,
      logo: uploadResults.logo?.[0] || null,
      documentUrls: uploadResults.documents || [],
      financialStatementUrls: uploadResults.financialStatements || [],
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    // Transform data for Firestore
    const firestoreData = transformForFirestore(documentData);

    // Write main document
    await setDoc(companyRef, firestoreData);

    // Create subcollections
    await createSubcollections(companyId, documentData);

    return companyId;
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