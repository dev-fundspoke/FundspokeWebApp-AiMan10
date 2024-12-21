export interface TechnologyDescription {
  detailedDescription: string;
  supportingDocuments: SupportingDocument[];
}

export interface SupportingDocument {
  id: string;
  fileId?: string;
  documentType: string;
  documentCategory: string;
  fileName: string;
  fileSize: number;
}