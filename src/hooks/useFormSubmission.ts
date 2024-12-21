import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { showMessage } from '../components/common/ThemedMessage';
import { createCompany } from '../services/company/companyService';
import { validateCompanyData } from '../validation/company/validators';
import { FirebaseError } from '../services/firebase/errors';
import type { FormInstance } from 'antd';
import type { CompanyFormData } from '../types/company';

export const useFormSubmission = (form: FormInstance<CompanyFormData>) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async () => {
    try {
      setIsSubmitting(true);
      
      // First validate using Ant Design's form validation
      const values = await form.validateFields();

      // Then validate and clean data using our custom validation
      const validatedData = await validateCompanyData(values);

      // Create company with validated data
      const companyId = await createCompany(validatedData);
      
      showMessage.success('Company created successfully');
      navigate('/new-company/confirmation', { state: { companyId } });
    } catch (error) {
      console.error('Form submission error:', error);

      if (error instanceof FirebaseError && error.code === 'VALIDATION_ERROR') {
        if (error.context?.field) {
          form.setFields([{
            name: error.context.field,
            errors: [error.message]
          }]);
        } else {
          showMessage.error(error.message);
        }
      } else {
        showMessage.error('An error occurred while submitting the form');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [form, navigate]);

  return {
    handleSubmit,
    isSubmitting,
  };
};