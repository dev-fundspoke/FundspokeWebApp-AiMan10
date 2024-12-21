import React from 'react';
import { Form, InputNumber } from 'antd';
import { validationMessages } from '../../../../../../utils/validationMessages';

interface DebtAmountProps {
  namePrefix: (string | number)[];
}

export const DebtAmount: React.FC<DebtAmountProps> = ({ namePrefix }) => (
  <Form.Item
    name={[...namePrefix, 'currentDebtAmount']}
    label="Current Debt Amount"
    rules={[
      { required: true, message: validationMessages.required('amount') },
      { type: 'number', min: 0, max: 1000000000, message: validationMessages.number.max('Amount', 1000000000) }
    ]}
  >
    <InputNumber
      className="w-full"
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => Number(value!.replace(/\$\s?|(,*)/g, ''))}
      placeholder="Enter amount"
    />
  </Form.Item>
);