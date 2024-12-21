import React from 'react';
import { Form, Input, InputNumber, DatePicker, Select, Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';
import { investmentTypes } from '../../../../../types/investment';
import { DocumentUpload } from './DocumentUpload';

interface InvestmentRecordEntryProps {
  index: number;
  onDelete: () => void;
  isLastEntry: boolean;
}

export const InvestmentRecordEntry: React.FC<InvestmentRecordEntryProps> = ({
  index,
  onDelete,
  isLastEntry,
}) => {
  const namePrefix = ['investments', index];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <GlowingText 
          className="text-lg font-medium"
          color={darkTheme.colors.accent.primary}
        >
          Investment Record {index + 1}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.Item
            name={[...namePrefix, 'date']}
            label="Investment Date"
            rules={[{ required: true, message: 'Please select date' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>

          <Form.Item
            name={[...namePrefix, 'amountReceived']}
            label="Amount Received"
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
        </div>

        <Form.Item
          name={[...namePrefix, 'investmentType']}
          label="Investment Type"
          rules={[{ required: true, message: 'Please select investment type' }]}
        >
          <Select placeholder="Select investment type">
            {investmentTypes.map(type => (
              <Select.Option key={type} value={type}>{type}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <div className="space-y-4">
          <GlowingText 
            className="text-base font-medium"
            color={darkTheme.colors.accent.secondary}
          >
            Investor Information
          </GlowingText>

          <Form.Item
            name={[...namePrefix, 'investorInfo', 'name']}
            label="Investor Name"
            rules={[{ required: true, message: 'Please enter investor name' }]}
          >
            <Input placeholder="Enter investor name" />
          </Form.Item>

          <Form.Item
            name={[...namePrefix, 'investorInfo', 'contact']}
            label="Contact Information"
          >
            <Input placeholder="Enter contact information" />
          </Form.Item>

          <Form.Item
            name={[...namePrefix, 'investorInfo', 'details']}
            label="Additional Details"
          >
            <Input.TextArea 
              rows={4}
              placeholder="Enter additional details about the investor"
            />
          </Form.Item>
        </div>

        <DocumentUpload namePrefix={[...namePrefix, 'supportingDocuments']} />
      </Space>
    </div>
  );
};