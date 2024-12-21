import { useState, useCallback } from 'react';
import type { FormInstance } from 'antd/es/form';

export const useFormState = (form: FormInstance) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = useCallback(async () => {
    try {
      setIsSubmitting(true);
      const values = await form.validateFields();
      return values;
    } finally {
      setIsSubmitting(false);
    }
  }, [form]);

  const handleSave = useCallback(async () => {
    try {
      setIsSaving(true);
      const values = form.getFieldsValue();
      return values;
    } finally {
      setIsSaving(false);
    }
  }, [form]);

  return {
    isSubmitting,
    isSaving,
    handleSubmit,
    handleSave,
  };
};