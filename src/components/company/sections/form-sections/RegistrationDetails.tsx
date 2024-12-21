import React from 'react';
import { Form, Input, DatePicker } from 'antd';
import dayjs from 'dayjs';
import type { FormInstance } from 'antd/es/form';

interface RegistrationDetailsProps {
  form: FormInstance;
}

export const RegistrationDetails: React.FC<RegistrationDetailsProps> = ({ form }) => {
  const disabledFutureDate = (current: dayjs.Dayjs) => {
    return current && current > dayjs().endOf('day');
  };

  return (
    <div className="space-y-6">
      <Form.Item
        label="Corporation Number"
        name="corporationNumber"
        rules={[
          { required: true, message: 'Please enter corporation number' },
          { pattern: /^[A-Z0-9-]+$/, message: 'Please enter a valid corporation number' }
        ]}
        tooltip="Official corporation registration number"
      >
        <Input placeholder="Enter corporation number" />
      </Form.Item>

      <Form.Item
        label="Incorporation Date"
        name="incorporationDate"
        rules={[{ required: true, message: 'Please select incorporation date' }]}
        tooltip="Date when the company was legally incorporated"
        getValueProps={(date: string) => ({
          value: date ? dayjs(date) : undefined
        })}
      >
        <DatePicker 
          className="w-full" 
          disabledDate={disabledFutureDate}
          format="YYYY-MM-DD"
        />
      </Form.Item>

      <Form.Item
        label="NAICS Code"
        name="naicsCode"
        rules={[{ pattern: /^\d{6}$/, message: 'Please enter a valid 6-digit NAICS code' }]}
        tooltip="North American Industry Classification System code"
      >
        <Input 
          placeholder="Enter NAICS code" 
          maxLength={6}
          showCount
        />
      </Form.Item>

      <Form.Item
        label="Federal Business Registry Number"
        name="federalBusinessRegistryNumber"
        rules={[{ pattern: /^\d{9}$/, message: 'Please enter a valid 9-digit registry number' }]}
        tooltip="9-digit federal business registry number"
      >
        <Input 
          placeholder="Enter federal business registry number" 
          maxLength={9}
          showCount
        />
      </Form.Item>
    </div>
  );
};