export type DocumentType = 'Contract' | 'Financial' | 'Legal' | 'Technical' | 'Other';
export type DocumentCategory = 'Internal' | 'External' | 'Confidential' | 'Public';

export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  documentType: DocumentType;
  documentCategory: DocumentCategory;
  tags?: string[];
  notes?: string;
  file: File;
}

export const documentTypes: DocumentType[] = [
  'Contract',
  'Financial',
  'Legal',
  'Technical',
  'Other',
];

export const documentCategories: DocumentCategory[] = [
  'Internal',
  'External',
  'Confidential',
  'Public',
];