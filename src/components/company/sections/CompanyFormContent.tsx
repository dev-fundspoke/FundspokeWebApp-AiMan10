import React from 'react';
import { Collapse } from 'antd';
import { CompanyInformation } from './CompanyInformation';
import { GlowingText } from '../../common/GlowingText';
import { darkTheme } from '../../../styles/themes/dark';

export const CompanyFormContent: React.FC = () => {
  const items = [
    {
      key: 'companyInfo',
      label: (
        <div className="flex items-center gap-2">
          <GlowingText className="text-lg font-medium" color={darkTheme.colors.accent.primary}>
            Company Information
          </GlowingText>
          <span className="text-sm text-red-500">(Required)</span>
        </div>
      ),
      children: <CompanyInformation />
    }
  ];

  return (
    <div className="space-y-8">
      <Collapse
        defaultActiveKey={['companyInfo']}
        className="company-info-form"
        items={items}
        expandIconPosition="end"
        style={{
          background: 'transparent',
          border: 'none',
        }}
      />
    </div>
  );
};