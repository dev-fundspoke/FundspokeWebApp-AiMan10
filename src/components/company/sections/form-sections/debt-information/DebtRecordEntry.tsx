import React from 'react';
import { Form, Input, InputNumber, Select, Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';
import { debtTypes } from '../../../../../types/debt';
import { DocumentUpload } from './DocumentUpload';

interface DebtRecordEntryProps {
  index: number;
  onDelete: () => void;
  isLastEntry: boolean;
}

export const DebtRecordEntry: React.FC<DebtRecordEntryProps> = ({
  index,
  onDelete,
  isLastEntry,
}) => {
  const namePrefix = ['debts', index];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <GlowingText 
          className="text-lg font-medium"
          color={darkTheme.colors.accent.primary}
        >
          Debt Record {index + 1}
        </GlowingText>
        
        {!isLastEntry && (
          <Button
            danger
            type="primary"
            icon={<DeleteOutlined />}
            onClick={onDelete}
            className="hover:scale-105 transition-transform duration-300"
          >
            Remove Record
          </Button>
        )}
      </div>

      <Space direction="vertical" className="w-full" size="large">
        <Form.Item
          name={[...namePrefix, 'debtType']}
          label="Debt Type"
          rules={[{ required: true, message: 'Please select debt type' }]}
        >
          <Select placeholder="Select debt type">
            {debtTypes.map(type => (
              <Select.Option key={type} value={type}>{type}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'currentDebtAmount']}
          label="Current Debt Amount"
          rules={[
            { required: true, message: 'Please enter amount' },
            { type: 'number', min: 0, max: 1000000000, message: 'Amount must be between 0 and 1,000,000,000' }
          ]}
        >
          <InputNumber
            className="w-full"
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => Number(value!.replace(/\$\s?|(,*)/g, ''))}
            placeholder="Enter amount"
          />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'paymentSchedule']}
          label="Payment Schedule"
          rules={[{ required: true, message: 'Please enter payment schedule' }]}
        >
          <Input.TextArea 
            rows={4}
            placeholder="Enter payment schedule details"
          />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'notes']}
          label="Notes"
        >
          <Input.TextArea 
            rows={4}
            placeholder="Enter additional notes about this debt"
          />
        </Form.Item>

        <DocumentUpload namePrefix={[...namePrefix, 'supportingDocuments']} />
      </Space>
    </div>
  );
};