import React from 'react';
import { Form, InputNumber, Select, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { quarterOptions } from '../../../../../utils/quarterUtils';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';

interface QuarterEntryFormProps {
  index: number;
  onDelete: () => void;
  existingQuarters: string[];
}

export const QuarterEntryForm: React.FC<QuarterEntryFormProps> = ({
  index,
  onDelete,
  existingQuarters,
}) => {
  const namePrefix = ['employeeCount', String(index)];
  const form = Form.useFormInstance();

  const availableQuarters = quarterOptions.filter(
    option => !existingQuarters.includes(option.value) || 
              form.getFieldValue([...namePrefix, 'quarterYear']) === option.value
  );

  return (
    <div className="space-y-6 p-6 rounded-lg bg-opacity-10 bg-white">
      <div className="flex justify-between items-center mb-6">
        <GlowingText 
          className="text-lg font-medium"
          color={darkTheme.colors.accent.primary}
        >
          Quarter Entry {index + 1}
        </GlowingText>
        
        <Button
          danger
          type="primary"
          icon={<DeleteOutlined />}
          onClick={onDelete}
          className="hover:scale-105 transition-transform duration-300"
        >
          Remove Quarter
        </Button>
      </div>

      <Form.Item
        name={[...namePrefix, 'quarterYear']}
        label="Quarter"
        rules={[
          { required: true, message: 'Please select quarter' },
          {
            validator: async (_, value) => {
              if (value && existingQuarters.filter(q => q === value).length > 1) {
                throw new Error('This quarter has already been selected');
              }
            },
          },
        ]}
      >
        <Select
          options={availableQuarters}
          placeholder="Select quarter"
          className="w-full"
        />
      </Form.Item>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Form.Item
          name={[...namePrefix, 'fullTime']}
          label="Full-time Employees"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber
            min={0}
            placeholder="Enter count"
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'partTime']}
          label="Part-time Employees"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber
            min={0}
            placeholder="Enter count"
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'contract']}
          label="Contract Workers"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber
            min={0}
            placeholder="Enter count"
            className="w-full"
          />
        </Form.Item>
      </div>
    </div>
  );
};