import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { showMessage } from '../components/common/ThemedMessage';
import { createCompany } from '../services/company/companyService';
import { FirebaseError } from '../services/firebase/errors';
import { trackEvent } from '../services/analytics';
import type { CompanyFormData } from '../types/company';

export const useCompanyForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<CompanyFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (values: CompanyFormData) => {
    try {
      setIsSubmitting(true);
      
      // Create company in Firestore
      const companyId = await createCompany(values);
      
      // Track successful company creation
      trackEvent('company_created', { companyId });
      
      showMessage.success('Company created successfully');
      navigate('/new-company/confirmation', { state: { companyId } });
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Track error
      trackEvent('company_creation_error', { 
        error: error instanceof FirebaseError ? error.code : 'unknown_error' 
      });
      
      if (error instanceof FirebaseError) {
        showMessage.error(error.message);
      } else {
        showMessage.error('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [navigate]);

  return {
    form,
    handleSubmit,
    isSubmitting,
  };
};