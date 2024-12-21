import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { showMessage } from '../../common/ThemedMessage';
import type { CompanyInformation } from '../../../types/company';
import type { FormInstance } from 'antd/es/form';

export const useCompanyForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<CompanyInformation>();
  const formRef = useRef<FormInstance>(null);

  useEffect(() => {
    if (formRef.current) {
      form.setFieldsValue({
        status: 'Active',
        sector: [],
        companyName: { en: '', fr: '' },
      });
    }
  }, [form]);

  const handleSaveDraft = () => {
    const values = form.getFieldsValue();
    console.log('Saving draft...', values);
    showMessage.success('Draft saved successfully');
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('Form submitted:', values);
      showMessage.success('Company information submitted successfully');
      navigate('/new-company/confirmation');
    } catch (error) {
      showMessage.error('Please check the form for errors');
    }
  };

  return {
    form,
    formRef,
    handleSaveDraft,
    handleSubmit,
  };
};