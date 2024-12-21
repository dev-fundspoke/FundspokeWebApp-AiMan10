import { doc, getDoc } from 'firebase/firestore';
import { db } from '../init';
import { handleFirebaseError } from '../errors';

// Generic document retrieval with type safety
export const getDocument = async <T>(
  collectionName: string,
  documentId: string
): Promise<T | null> => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as T) : null;
  } catch (error) {
    return handleFirebaseError(error);
  }
};