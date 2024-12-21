import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../init';
import { FirebaseError } from '../errors';
import { ERROR_CODES } from '../constants';

export const uploadFile = async (file: File, path: string): Promise<string> => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new FirebaseError(
      'Failed to upload file',
      ERROR_CODES.UPLOAD_FILE,
      { originalError: error }
    );
  }
};

export const uploadCompanyFiles = async (companyId: string, files: Record<string, File[]>) => {
  const uploadResults: Record<string, string[]> = {};

  for (const [category, categoryFiles] of Object.entries(files)) {
    const urls = await Promise.all(
      categoryFiles.map(file => 
        uploadFile(file, `companies/${companyId}/${category}/${file.name}`)
      )
    );
    uploadResults[category] = urls;
  }

  return uploadResults;
};