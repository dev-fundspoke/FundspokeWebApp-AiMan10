import React from 'react';
import { Form, Input, InputNumber, DatePicker, Select } from 'antd';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';
import { investmentTypes } from '../../../../../types/investment';

interface InvestmentFormProps {
  namePrefix: (string | number)[];
}

export const InvestmentForm: React.FC<InvestmentFormProps> = ({ namePrefix }) => {
  return (
    <div className="space-y-6">
      <GlowingText 
        className="text-lg font-medium"
        color={darkTheme.colors.accent.primary}
      >
        Investment Details
      </GlowingText>

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
          { type: 'number', min: 0, message: 'Amount must be non-negative' }
        ]}
      >
        <InputNumber
          className="w-full"
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => Number(value!.replace(/\$\s?|(,*)/g, ''))}
          placeholder="Enter amount received"
        />
      </Form.Item>

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
    </div>
  );
};