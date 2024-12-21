import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../../config/firebase';
import { CompanyError, CompanyErrorCodes } from './errors';
import { v4 as uuidv4 } from 'uuid';
import type { FileMetadata, FileUploadResult } from './types';

export const fileService = {
  async uploadFile(
    file: File,
    companyId: string,
    category: string
  ): Promise<FileUploadResult> {
    try {
      const fileId = uuidv4();
      const fileName = `${fileId}-${file.name}`;
      const fileRef = ref(storage, `companies/${companyId}/${category}/${fileName}`);
      
      const snapshot = await uploadBytes(fileRef, file);
      const downloadUrl = await getDownloadURL(snapshot.ref);

      const metadata: FileMetadata = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        category,
        url: downloadUrl,
        uploadedAt: new Date().toISOString(),
      };

      await setDoc(
        doc(collection(db, 'companies', companyId, 'files'), fileId),
        metadata
      );

      return { url: downloadUrl, metadata };
    } catch (error) {
      throw new CompanyError(
        'Failed to upload file',
        CompanyErrorCodes.UPLOAD_FAILED,
        { companyId, category, fileName: file.name, error }
      );
    }
  },

  async deleteFile(
    companyId: string,
    fileId: string,
    fileName: string,
    category: string
  ): Promise<void> {
    try {
      const fileRef = ref(storage, `companies/${companyId}/${category}/${fileId}-${fileName}`);
      await deleteObject(fileRef);
      
      await setDoc(
        doc(db, 'companies', companyId, 'files', fileId),
        { deletedAt: new Date().toISOString() },
        { merge: true }
      );
    } catch (error) {
      throw new CompanyError(
        'Failed to delete file',
        CompanyErrorCodes.UPLOAD_FAILED,
        { companyId, fileId, fileName, category, error }
      );
    }
  }
};