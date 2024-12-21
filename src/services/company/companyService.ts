import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { validateCompanyData } from '../../validation/company/validators';
import { transformForFirestore } from '../firebase/utils/transformers';
import { FirebaseError } from '../firebase/errors';
import { ERROR_CODES } from '../firebase/constants';
import type { CompanyFormData } from '../../types/company';

export const createCompany = async (data: CompanyFormData): Promise<string> => {
  try {
    // Validate data
    const validatedData = await validateCompanyData(data);

    // Transform for Firestore
    const firestoreData = transformForFirestore({
      ...validatedData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // Create document in Firestore
    const docRef = await addDoc(collection(db, 'companies'), firestoreData);
    
    return docRef.id;
  } catch (error) {
    console.error('Error creating company:', error);
    
    if (error instanceof FirebaseError) {
      throw error;
    }
    
    throw new FirebaseError(
      'Failed to create company',
      ERROR_CODES.CREATE_COMPANY,
      { originalError: error }
    );
  }
};