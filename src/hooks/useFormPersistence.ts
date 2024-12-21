import { useCallback } from 'react';
import type { FormInstance } from 'antd/es/form';

export const useFormPersistence = (form: FormInstance, storageKey: string) => {
  const saveForm = useCallback(async () => {
    try {
      const values = form.getFieldsValue();
      localStorage.setItem(storageKey, JSON.stringify(values));
    } catch (error) {
      console.error('Error saving form:', error);
      throw new Error('Failed to save form data');
    }
  }, [form, storageKey]);

  const loadSavedForm = useCallback(() => {
    try {
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        form.setFieldsValue(parsedData);
      }
    } catch (error) {
      console.error('Error loading saved form:', error);
    }
  }, [form, storageKey]);

  const clearSavedForm = useCallback(() => {
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.error('Error clearing saved form:', error);
    }
  }, [storageKey]);

  return {
    saveForm,
    loadSavedForm,
    clearSavedForm,
  };
};