import type { FormInstance } from 'antd/es/form';
import type { NamePath } from 'antd/es/form/interface';

export const isFieldRequired = (form: FormInstance, fieldName: NamePath): boolean => {
  const field = form.getFieldInstance(fieldName);
  if (!field) return false;

  const rules = form.getFieldRules(fieldName);
  return rules?.some(rule => rule.required) ?? false;
};

export const getRequiredFields = (form: FormInstance): NamePath[] => {
  const allFields = form.getFieldsValue(true);
  const requiredFields: NamePath[] = [];

  const traverse = (obj: any, path: (string | number)[] = []) => {
    if (!obj || typeof obj !== 'object') return;

    Object.keys(obj).forEach(key => {
      const currentPath = [...path, key];
      if (isFieldRequired(form, currentPath)) {
        requiredFields.push(currentPath);
      }
      traverse(obj[key], currentPath);
    });
  };

  traverse(allFields);
  return requiredFields;
};

export const isFieldFilled = (form: FormInstance, fieldName: NamePath): boolean => {
  const value = form.getFieldValue(fieldName);
  
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  
  if (typeof value === 'object' && value !== null) {
    return Object.values(value).some(v => v !== undefined && v !== '' && v !== null);
  }
  
  return value !== undefined && value !== '' && value !== null;
};

export const validateSocialMediaLinks = (_: unknown, value: string): Promise<void> => {
  if (!value) return Promise.resolve();
  
  const links = value.split('\n').filter(Boolean);
  if (links.length > 5) {
    return Promise.reject('Maximum 5 social media links allowed');
  }

  const urlRegex = /^https?:\/\/.+/;
  const invalidLinks = links.filter(link => !urlRegex.test(link));
  if (invalidLinks.length > 0) {
    return Promise.reject('Please enter valid URLs');
  }

  return Promise.resolve();
};