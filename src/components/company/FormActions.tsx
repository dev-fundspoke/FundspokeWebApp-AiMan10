import React from 'react';
import { Button, Space } from 'antd';
import { SaveOutlined, SendOutlined, ClearOutlined } from '@ant-design/icons';
import { darkTheme } from '../../styles/themes/dark';

interface FormActionsProps {
  onSubmit: () => void;
  onClear: () => void;
  isSubmitting?: boolean;
}

export const FormActions: React.FC<FormActionsProps> = ({
  onSubmit,
  onClear,
  isSubmitting = false,
}) => {
  const buttonStyle = {
    minWidth: '140px',
    height: '44px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 500,
  };

  return (
    <Space size={16}>
      <Button 
        icon={<ClearOutlined />}
        onClick={onClear}
        style={{
          ...buttonStyle,
          borderColor: darkTheme.colors.accent.tertiary,
          color: darkTheme.colors.accent.tertiary,
        }}
        className="hover:shadow-lg transition-all duration-300"
      />

      <Button 
        type="primary"
        icon={<SendOutlined />}
        onClick={onSubmit}
        loading={isSubmitting}
        style={{
          ...buttonStyle,
          background: darkTheme.colors.accent.primary,
          borderColor: darkTheme.colors.accent.primary,
        }}
        className="hover:shadow-lg transition-all duration-300"
      >
        Submit
      </Button>
    </Space>
  );
};