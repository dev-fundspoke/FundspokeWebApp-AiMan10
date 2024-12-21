import { useCallback } from 'react';
import type { FormInstance } from 'antd/es/form';
import type { CompanyInformation } from '../../../types/company';

export const useCompanyFormState = (
  form: FormInstance<CompanyInformation>,
  formRef: React.RefObject<FormInstance>,
) => {
  const getCollapsePanelExtra = useCallback(() => {
    if (!formRef.current) return null;
    const values = form.getFieldsValue();
    if (!values.companyName?.en || !values.status) return null;
    
    return {
      companyName: values.companyName.en,
      status: values.status,
    };
  }, [form]);

  return {
    getCollapsePanelExtra,
  };
};