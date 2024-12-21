import React from 'react';
import { Form, Input, Select, Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { addressTypes } from '../../../../types/address';
import { darkTheme } from '../../../../styles/themes/dark';
import { useThemeContext } from '../../../../context/ThemeContext';
import { GlowingText } from '../../../common/GlowingText';

interface AddressBlockProps {
  index: number;
  onRemove: (index: number) => void;
  isLastAddress: boolean;
}

export const AddressBlock: React.FC<AddressBlockProps> = ({
  index,
  onRemove,
  isLastAddress,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const namePrefix = ['addresses', String(index)];

  const validateSocialMediaLinks = (_: unknown, value: string): Promise<void> => {
    if (!value) return Promise.resolve();
    
    const links = value.split('\n').filter(Boolean);
    if (links.length > 5) {
      return Promise.reject('Maximum 5 social media links allowed');
    }

    const urlRegex = /^https?:\/\/.+/;
    const invalidLinks = links.filter((link: string) => !urlRegex.test(link));
    if (invalidLinks.length > 0) {
      return Promise.reject('Please enter valid URLs');
    }

    return Promise.resolve();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <GlowingText 
          className="text-lg font-medium"
          color={isDark ? darkTheme.colors.accent.primary : darkTheme.colors.accent.secondary}
        >
          Address {index + 1}
        </GlowingText>
        
        {!isLastAddress && (
          <Button
            danger
            type="primary"
            icon={<DeleteOutlined />}
            onClick={() => onRemove(index)}
            className="hover:scale-105 transition-transform duration-300"
          >
            Remove Address
          </Button>
        )}
      </div>

      <Space direction="vertical" className="w-full" size="large">
        <Form.Item
          name={[...namePrefix, 'type']}
          label="Address Type"
          rules={[{ required: true, message: 'Please select address type' }]}
        >
          <Select placeholder="Select address type">
            {addressTypes.map(type => (
              <Select.Option key={type} value={type}>{type}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'address', 'line1']}
          label="Address Line 1"
          rules={[{ required: true, message: 'Please enter address line 1' }]}
        >
          <Input placeholder="Enter street address" />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'address', 'line2']}
          label="Address Line 2"
        >
          <Input placeholder="Enter apartment, suite, unit, etc." />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.Item
            name={[...namePrefix, 'address', 'city']}
            label="City"
            rules={[{ required: true, message: 'Please enter city' }]}
          >
            <Input placeholder="Enter city" />
          </Form.Item>

          <Form.Item
            name={[...namePrefix, 'address', 'state']}
            label="State/Province"
            rules={[{ required: true, message: 'Please enter state/province' }]}
          >
            <Input placeholder="Enter state/province" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.Item
            name={[...namePrefix, 'address', 'zipCode']}
            label="Zip/Postal Code"
            rules={[{ required: true, message: 'Please enter zip/postal code' }]}
          >
            <Input placeholder="Enter zip/postal code" />
          </Form.Item>

          <Form.Item
            name={[...namePrefix, 'address', 'country']}
            label="Country"
            rules={[{ required: true, message: 'Please enter country' }]}
          >
            <Input placeholder="Enter country" />
          </Form.Item>
        </div>

        <Form.Item
          name={[...namePrefix, 'website']}
          label="Website"
          rules={[
            { type: 'url', message: 'Please enter a valid URL' },
          ]}
        >
          <Input placeholder="Enter website URL" />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'socialMediaLinks']}
          label="Social Media Links"
          tooltip="Enter up to 5 social media URLs, one per line"
          rules={[{ validator: validateSocialMediaLinks }]}
        >
          <Input.TextArea
            placeholder="Enter social media URLs (one per line)"
            rows={4}
            className="font-mono text-sm"
          />
        </Form.Item>
      </Space>
    </div>
  );
};