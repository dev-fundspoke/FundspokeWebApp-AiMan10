import React from 'react';
import { Divider } from 'antd';
import { BasicInformation } from './form-sections/BasicInformation';
import { OrganizationDetails } from './form-sections/OrganizationDetails';
import { RegistrationDetails } from './form-sections/RegistrationDetails';
import type { FormInstance } from 'antd/es/form';

interface CompanyInformationProps {
  form: FormInstance;
}

export const CompanyInformation: React.FC<CompanyInformationProps> = ({ form }) => {
  return (
    <div className="company-info-form space-y-6">
      <BasicInformation />
      <Divider />
      <OrganizationDetails />
      <Divider />
      <RegistrationDetails form={form} />
    </div>
  );
};