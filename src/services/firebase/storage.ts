import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './init';
import { FirebaseError } from './errors';
import { ERROR_CODES, STORAGE_PATHS } from './constants';

export const uploadFile = async (file: File, companyId: string, type: 'logos' | 'documents'): Promise<string> => {
  try {
    const path = STORAGE_PATHS[type === 'logos' ? 'COMPANY_LOGOS' : 'COMPANY_DOCUMENTS']
      .replace('{companyId}', companyId);
    const fileName = `${Date.now()}-${file.name}`;
    const fullPath = `${path}/${fileName}`;
    
    const storageRef = ref(storage, fullPath);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    if (error instanceof Error) {
      throw new FirebaseError(
        'Failed to upload file: ' + error.message,
        ERROR_CODES.UPLOAD_FILE,
        { originalError: error }
      );
    }
    throw new FirebaseError('Failed to upload file', ERROR_CODES.UPLOAD_FILE);
  }
};

export const deleteFile = async (path: string): Promise<void> => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    if (error instanceof Error) {
      throw new FirebaseError(
        'Failed to delete file: ' + error.message,
        ERROR_CODES.DELETE_FILE,
        { originalError: error }
      );
    }
    throw new FirebaseError('Failed to delete file', ERROR_CODES.DELETE_FILE);
  }
};