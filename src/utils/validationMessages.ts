export const validationMessages = {
  required: (field: string) => `Please enter ${field}`,
  email: 'Please enter a valid email address',
  url: 'Please enter a valid URL',
  phone: 'Please enter a valid phone number',
  minLength: (field: string, min: number) => 
    `${field} must be at least ${min} characters`,
  maxLength: (field: string, max: number) => 
    `${field} must not exceed ${max} characters`,
  number: {
    min: (field: string, min: number) => 
      `${field} must be greater than or equal to ${min}`,
    max: (field: string, max: number) => 
      `${field} must be less than or equal to ${max}`,
    type: (field: string) => 
      `${field} must be a valid number`,
  },
  file: {
    type: (types: string[]) => 
      `File type must be one of: ${types.join(', ')}`,
    size: (maxSize: number) => 
      `File size must not exceed ${maxSize / (1024 * 1024)}MB`,
    count: (max: number) => 
      `You can upload up to ${max} files`,
  },
};