import React from 'react';
import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

interface CurrencyInputProps extends Omit<InputNumberProps, 'formatter' | 'parser'> {
  prefix?: string;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  prefix = '$',
  className = '',
  ...props
}) => {
  return (
    <InputNumber
      className={`w-full ${className}`}
      formatter={value => `${prefix} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value: string | undefined): number => {
        if (!value) return 0;
        return Number(value.replace(new RegExp(`${prefix}\\s?|(,*)`, 'g'), '')) || 0;
      }}
      {...props}
    />
  );
};