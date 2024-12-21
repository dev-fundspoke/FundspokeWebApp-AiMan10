import { useEffect, useCallback, useState } from 'react';
import { Form } from 'antd';
import { realtimeService } from '../services/company/realtimeService';
import { showMessage } from '../components/common/ThemedMessage';
import { debounce } from '../utils/debounce';
import type { CompanyInformation } from '../types/company';

export const useRealtimeForm = (companyId?: string) => {
  const [form] = Form.useForm<CompanyInformation>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  // Debounced update function to prevent too many writes
  const updateField = useCallback(
    debounce(async (field: keyof CompanyInformation, value: any) => {
      if (!companyId) return;
      
      try {
        setIsSyncing(true);
        await realtimeService.updateCompanyField(companyId, field, value);
      } catch (error) {
        showMessage.error('Failed to sync changes');
        console.error('Sync error:', error);
      } finally {
        setIsSyncing(false);
      }
    }, 1000),
    [companyId]
  );

  // Subscribe to real-time updates
  useEffect(() => {
    if (!companyId) return;

    setIsLoading(true);
    const unsubscribe = realtimeService.subscribeToCompany(
      companyId,
      (data) => {
        form.setFieldsValue(data);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [companyId, form]);

  // Watch form changes and sync with Firebase
  useEffect(() => {
    if (!companyId) return;

    const { getFieldsValue, getInternalHooks } = form;
    const values = getFieldsValue(true);

    const unsubscribe = getInternalHooks('RC_FORM_INTERNAL_HOOKS')?.__INTERNAL__.notifyWatch(
      (changedFields: string[]) => {
        changedFields.forEach((field) => {
          const value = values[field as keyof CompanyInformation];
          updateField(field as keyof CompanyInformation, value);
        });
      }
    );

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [companyId, form, updateField]);

  return {
    form,
    isLoading,
    isSyncing,
  };
};