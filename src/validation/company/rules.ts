import type { Rule } from 'antd/es/form';
import { validateSocialMediaLinks } from '../../utils/formValidation';

// Required company information rules
export const companyValidationRules = {
  companyName: {
    en: [
      { required: true, message: 'Company name in English is required' },
      { min: 2, message: 'Company name must be at least 2 characters' },
      { max: 100, message: 'Company name cannot exceed 100 characters' },
      { pattern: /^[a-zA-Z0-9\s\-&.]+$/, message: 'Company name can only contain letters, numbers, spaces, and -&.' }
    ],
    fr: [
      { required: true, message: 'Company name in French is required' },
      { min: 2, message: 'Company name must be at least 2 characters' },
      { max: 100, message: 'Company name cannot exceed 100 characters' },
      { pattern: /^[a-zA-ZÀ-ÿ0-9\s\-&.]+$/, message: 'Company name can only contain letters, numbers, spaces, and -&.' }
    ]
  },
  companyOverview: [
    { required: true, message: 'Company overview is required' },
    { min: 150, message: 'Overview must be at least 150 words' },
    { max: 1000, message: 'Overview cannot exceed 1000 words' }
  ],
  legalName: [
    { required: true, message: 'Legal name is required' },
    { min: 2, message: 'Legal name must be at least 2 characters' },
    { max: 100, message: 'Legal name cannot exceed 100 characters' }
  ],
  corporationNumber: [
    { required: true, message: 'Corporation number is required' },
    { pattern: /^[A-Z0-9-]+$/, message: 'Corporation number must contain only uppercase letters, numbers, and hyphens' }
  ]
};

// Optional validation rules for other sections
export const optionalValidationRules = {
  address: {
    line1: [
      { max: 100, message: 'Address line 1 cannot exceed 100 characters' }
    ],
    line2: [
      { max: 100, message: 'Address line 2 cannot exceed 100 characters' }
    ],
    city: [
      { pattern: /^[a-zA-Z\s-]+$/, message: 'City can only contain letters, spaces, and hyphens' }
    ],
    zipCode: [
      { pattern: /^[A-Z0-9\s-]+$/i, message: 'Please enter a valid postal code' }
    ]
  },
  contact: {
    email: [
      { type: 'email', message: 'Please enter a valid email address' }
    ],
    phone: [
      { pattern: /^\+?[\d\s-()]+$/, message: 'Please enter a valid phone number' }
    ],
    linkedIn: [
      { type: 'url', message: 'Please enter a valid LinkedIn URL' },
      { pattern: /^https:\/\/[w.]*linkedin\.com\/.*$/, message: 'Please enter a valid LinkedIn URL' }
    ]
  },
  socialMedia: [
    { validator: validateSocialMediaLinks }
  ]
};