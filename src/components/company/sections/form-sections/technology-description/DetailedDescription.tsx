import React from 'react';
import { Form, Input } from 'antd';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';

const { TextArea } = Input;

export const DetailedDescription: React.FC = () => {
  return (
    <div className="space-y-6">
      <GlowingText 
        className="text-lg font-medium"
        color={darkTheme.colors.accent.primary}
      >
        Technology Description
      </GlowingText>

      <Form.Item
        name={['technologyDescription', 'detailedDescription']}
        rules={[
          { required: true, message: 'Please provide a detailed description' },
          { min: 100, message: 'Description must be at least 100 characters' },
          { max: 1000, message: 'Description must not exceed 1000 characters' }
        ]}
      >
        <TextArea
          rows={6}
          placeholder="Provide a detailed description of your technology..."
          showCount
          maxLength={1000}
        />
      </Form.Item>
    </div>
  );
};