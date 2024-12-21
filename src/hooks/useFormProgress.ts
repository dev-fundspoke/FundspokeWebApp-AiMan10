import { useState, useEffect } from 'react';
import type { FormInstance } from 'antd/es/form';
import { getRequiredFields, isFieldFilled } from '../utils/formValidation';

export const useFormProgress = (form?: FormInstance): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!form) return;

    const calculateProgress = () => {
      const requiredFields = getRequiredFields(form);
      if (requiredFields.length === 0) return 0;

      const completedFields = requiredFields.filter(field => isFieldFilled(form, field));
      return Math.round((completedFields.length / requiredFields.length) * 100);
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