import { useState, useEffect } from 'react';
import type { FormInstance } from 'antd/es/form';
import { getRequiredFields, isFieldFilled } from '../utils/formValidation';

interface FieldProgress {
  total: number;
  completed: number;
  percentage: number;
}

export const useFormFieldsProgress = (form: FormInstance): FieldProgress => {
  const [progress, setProgress] = useState<FieldProgress>({
    total: 0,
    completed: 0,
    percentage: 0,
  });

  useEffect(() => {
    const calculateProgress = () => {
      const requiredFields = getRequiredFields(form);
      const completedFields = requiredFields.filter(field => isFieldFilled(form, field));

      const total = requiredFields.length;
      const completed = completedFields.length;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

      return { total, completed, percentage };
    };

    // Initial calculation
    setProgress(calculateProgress());

    // Setup form change listener
    const unsubscribe = form.getInternalHooks('RC_FORM_INTERNAL_HOOKS')?.__INTERNAL__.notifyWatch(() => {
      setProgress(calculateProgress());
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [form]);

  return progress;
};