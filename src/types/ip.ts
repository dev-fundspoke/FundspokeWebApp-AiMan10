export type IPType = 'Patent' | 'Trademark' | 'Copyright' | 'Trade Secret' | 'Other';
export type DocumentType = 'Patent Application' | 'Filing Receipt' | 'Office Action' | 'Granted Patent' | 'Other';
export type DocumentCategory = 'Legal' | 'Technical' | 'Financial' | 'Other';

export interface IPEntry {
  id: string;
  type: IPType;
  title: string;
  description: string;
  notes?: string;
  fileId?: string;
  documentType: DocumentType;
  documentCategory: DocumentCategory;
}

export const ipTypes: IPType[] = ['Patent', 'Trademark', 'Copyright', 'Trade Secret', 'Other'];
export const documentTypes: DocumentType[] = ['Patent Application', 'Filing Receipt', 'Office Action', 'Granted Patent', 'Other'];
export const documentCategories: DocumentCategory[] = ['Legal', 'Technical', 'Financial', 'Other'];