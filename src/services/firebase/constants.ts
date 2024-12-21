export const COLLECTIONS = {
  COMPANIES: 'companies',
  DOCUMENTS: 'documents',
  MEMBERS: 'members',
} as const;

export const ERROR_CODES = {
  CREATE_COMPANY: 'CREATE_COMPANY_ERROR',
  UPLOAD_FILE: 'UPLOAD_FILE_ERROR',
  DELETE_FILE: 'DELETE_FILE_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INITIALIZATION_ERROR: 'INITIALIZATION_ERROR',
} as const;

export const MAX_FILE_SIZES = {
  LOGO: 5 * 1024 * 1024, // 5MB
  DOCUMENT: 10 * 1024 * 1024, // 10MB
  FINANCIAL_STATEMENT: 10 * 1024 * 1024, // 10MB
} as const;

export const ALLOWED_FILE_TYPES = {
  IMAGES: ['image/jpeg', 'image/png', 'image/svg+xml'],
  DOCUMENTS: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ],
} as const;