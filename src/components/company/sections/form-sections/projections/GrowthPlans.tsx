import React from 'react';
import { Form, Input } from 'antd';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';

export const GrowthPlans: React.FC = () => {
  return (
    <div className="space-y-6">
      <GlowingText 
        className="text-lg font-medium"
        color={darkTheme.colors.accent.primary}
      >
        Growth Plans
      </GlowingText>

      <Form.Item
        name={['projections', 'growthPlans']}
        rules={[
          { required: true, message: 'Please provide growth plans' },
          { min: 100, message: 'Growth plans must be at least 100 words' },
          { max: 1000, message: 'Growth plans must not exceed 1000 words' },
        ]}
      >
        <Input.TextArea
          rows={8}
          placeholder="Describe your company's growth plans and strategies..."
          showCount={{
            formatter: ({ value = '' }) => {
              const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
              return `${wordCount} words`;
            },
          }}
        />
      </Form.Item>
    </div>
  );
};