import React from 'react';
import { Form } from 'antd';
import { SciFiCard } from '../common/SciFiCard';
import { CompanyFormContent } from './sections/CompanyFormContent';
import { FormActions } from './FormActions';
import { LoadingState } from '../common/LoadingState';
import { useCompanyForm } from '../../hooks/useCompanyForm';
import { FormErrorBoundary } from '../error/FormErrorBoundary';
import type { CompanyFormData } from '../../types/company';

export const NewCompanyForm: React.FC = () => {
  const { form, handleSubmit, isSubmitting } = useCompanyForm();

  if (isSubmitting) {
    return (
      <SciFiCard className="w-full p-6 md:p-8">
        <LoadingState message="Submitting form..." />
      </SciFiCard>
    );
  }

  return (
    <FormErrorBoundary>
      <SciFiCard className="w-full p-6 md:p-8">
        <Form<CompanyFormData>
          form={form}
          layout="vertical"
          requiredMark="optional"
          onFinish={handleSubmit}
        >
          <CompanyFormContent />
          <div className="flex justify-end mt-8 md:mt-12">
            <FormActions
              onSubmit={() => form.submit()}
              onClear={() => form.resetFields()}
              isSubmitting={isSubmitting}
            />
          </div>
        </Form>
      </SciFiCard>
    </FormErrorBoundary>
  );
};