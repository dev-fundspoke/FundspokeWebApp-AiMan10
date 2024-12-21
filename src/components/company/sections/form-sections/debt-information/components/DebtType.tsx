import React from 'react';
import { Form, Select } from 'antd';
import { debtTypes } from '../../../../../../types/debt';
import { validationMessages } from '../../../../../../utils/validationMessages';

interface DebtTypeProps {
  namePrefix: (string | number)[];
}

export const DebtType: React.FC<DebtTypeProps> = ({ namePrefix }) => (
  <Form.Item
    name={[...namePrefix, 'debtType']}
    label="Debt Type"
    rules={[{ required: true, message: validationMessages.required('debt type') }]}
  >
    <Select placeholder="Select debt type">
      {debtTypes.map(type => (
        <Select.Option key={type} value={type}>{type}</Select.Option>
      ))}
    </Select>
  </Form.Item>
);