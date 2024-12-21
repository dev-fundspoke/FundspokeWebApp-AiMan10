import { useCallback } from 'react';
import { showMessage } from '../../common/ThemedMessage';
import type { FormInstance } from 'antd/es/form';
import type { NavigateFunction } from 'react-router-dom';
import type { CompanyInformation } from '../../../types/company';

export const useCompanyFormHandlers = (
  form: FormInstance<CompanyInformation>,
  formRef: React.RefObject<FormInstance>,
  navigate: NavigateFunction,
) => {
  const handleSaveDraft = useCallback(() => {
    if (!formRef.current) return;
    const values = form.getFieldsValue();
    console.log('Saving draft...', values);
    showMessage.success('Draft saved successfully');
  }, [form]);

  const handleSubmit = useCallback(async () => {
    if (!formRef.current) return;
    try {
      const values = await form.validateFields();
      console.log('Form submitted:', values);
      showMessage.success('Company information submitted successfully');
      navigate('/new-company/confirmation');
    } catch (error) {
      showMessage.error('Please check the form for errors');
    }
  }, [form, navigate]);

  return {
    handleSaveDraft,
    handleSubmit,
  };
};