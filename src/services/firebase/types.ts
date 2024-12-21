import type { CompanyInformation } from '../../types/company';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface FirebaseService {
  createCompany(data: Partial<CompanyInformation>): Promise<string>;
  uploadFile(file: File, path: string): Promise<string>;
  deleteFile(path: string): Promise<void>;
}