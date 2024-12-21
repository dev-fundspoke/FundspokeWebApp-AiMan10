import React from 'react';
import { Form, InputNumber, Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';

interface FinancialYearEntryProps {
  index: number;
  onDelete: () => void;
  isLastEntry: boolean;
}

export const FinancialYearEntry: React.FC<FinancialYearEntryProps> = ({
  index,
  onDelete,
  isLastEntry,
}) => {
  const namePrefix = ['financials', 'years', String(index)];
  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <GlowingText 
          className="text-lg font-medium"
          color={darkTheme.colors.accent.primary}
        >
          Financial Year {index + 1}
        </GlowingText>
        
        {!isLastEntry && (
          <Button
            danger
            type="primary"
            icon={<DeleteOutlined />}
            onClick={onDelete}
            className="hover:scale-105 transition-transform duration-300"
          >
            Remove Year
          </Button>
        )}
      </div>

      <Space direction="vertical" className="w-full" size="large">
        <Form.Item
          name={[...namePrefix, 'year']}
          label="Year"
          rules={[
            { required: true, message: 'Please enter year' },
            { type: 'number', min: currentYear - 10, max: currentYear, message: `Year must be between ${currentYear - 10} and ${currentYear}` }
          ]}
        >
          <InputNumber
            min={currentYear - 10}
            max={currentYear}
            className="w-full"
            placeholder="Enter year"
          />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'revenue']}
          label="Revenue"
          rules={[
            { required: true, message: 'Please enter revenue' },
            { type: 'number', min: 0, message: 'Revenue must be non-negative' }
          ]}
        >
          <InputNumber
            className="w-full"
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value: string | undefined): number => {
              if (!value) return 0;
              return Number(value.replace(/\$\s?|(,*)/g, '')) || 0;
            }}
            placeholder="Enter revenue"
          />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'profit']}
          label="Profit"
          rules={[{ required: true, message: 'Please enter profit' }]}
        >
          <InputNumber
            className="w-full"
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value: string | undefined): number => {
              if (!value) return 0;
              return Number(value.replace(/\$\s?|(,*)/g, '')) || 0;
            }}
            placeholder="Enter profit"
          />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'rdExpense']}
          label="R&D Expense"
          rules={[
            { required: true, message: 'Please enter R&D expense' },
            { type: 'number', min: 0, message: 'R&D expense must be non-negative' }
          ]}
        >
          <InputNumber
            min={0}
            className="w-full"
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value: string | undefined): number => {
              if (!value) return 0;
              return Number(value.replace(/\$\s?|(,*)/g, '')) || 0;
            }}
            placeholder="Enter R&D expense"
          />
        </Form.Item>
      </Space>
    </div>
  );
};