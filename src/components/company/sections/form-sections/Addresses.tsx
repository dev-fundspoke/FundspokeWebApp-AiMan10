import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AddressBlock } from './AddressBlock';
import { v4 as uuidv4 } from 'uuid';
import { darkTheme } from '../../../../styles/themes/dark';
import { useThemeContext } from '../../../../context/ThemeContext';
import { SciFiCard } from '../../../common/SciFiCard';

export const Addresses: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [addressIds, setAddressIds] = useState<string[]>([uuidv4()]);

  const addAddress = () => {
    setAddressIds(prev => [...prev, uuidv4()]);
  };

  const removeAddress = (index: number) => {
    setAddressIds(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      {addressIds.map((id, index) => (
        <SciFiCard key={id} className="p-6">
          <AddressBlock
            index={index}
            onRemove={() => removeAddress(index)}
            isLastAddress={addressIds.length === 1}
          />
        </SciFiCard>
      ))}

      <Space className="w-full justify-center">
        <Button
          type="primary"
          onClick={addAddress}
          icon={<PlusOutlined />}
          style={{
            background: isDark ? darkTheme.colors.accent.primary : darkTheme.colors.accent.secondary,
            borderColor: isDark ? darkTheme.colors.accent.primary : darkTheme.colors.accent.secondary,
            minWidth: '200px',
            height: '44px',
          }}
          className="hover:scale-105 transition-transform duration-300"
        >
          Add Another Address
        </Button>
      </Space>
    </div>
  );
};