import React, { forwardRef } from 'react';
import { Form, Input, Select, Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { documentTypes, documentCategories } from '../../../../types/document';
import { darkTheme } from '../../../../styles/themes/dark';
import { useThemeContext } from '../../../../context/ThemeContext';
import { GlowingText } from '../../../common/GlowingText';

interface DocumentEntryProps {
  index: number;
  onRemove: () => void;
}

export const DocumentEntry = forwardRef<HTMLDivElement, DocumentEntryProps>(({
  index,
  onRemove,
}, ref) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const namePrefix = ['documents', String(index)];

  return (
    <div ref={ref} className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <GlowingText 
          className="text-lg font-medium"
          color={isDark ? darkTheme.colors.accent.primary : darkTheme.colors.accent.secondary}
        >
          Document {index + 1}
        </GlowingText>
        
        <Button
          danger
          type="primary"
          icon={<DeleteOutlined />}
          onClick={onRemove}
          className="hover:scale-105 transition-transform duration-300"
        >
          Remove Document
        </Button>
      </div>

      <Space direction="vertical" className="w-full" size="large">
        <Form.Item
          name={[...namePrefix, 'title']}
          label="Document Title"
          rules={[{ required: true, message: 'Please enter document title' }]}
        >
          <Input placeholder="Enter document title" />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.Item
            name={[...namePrefix, 'documentType']}
            label="Document Type"
            rules={[{ required: true, message: 'Please select document type' }]}
          >
            <Select placeholder="Select document type">
              {documentTypes.map(type => (
                <Select.Option key={type} value={type}>{type}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name={[...namePrefix, 'documentCategory']}
            label="Document Category"
            rules={[{ required: true, message: 'Please select document category' }]}
          >
            <Select placeholder="Select document category">
              {documentCategories.map(category => (
                <Select.Option key={category} value={category}>{category}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          name={[...namePrefix, 'tags']}
          label="Tags"
          tooltip="Enter tags separated by commas"
        >
          <Input placeholder="Enter tags (e.g., important, draft, reviewed)" />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'notes']}
          label="Notes"
        >
          <Input.TextArea
            placeholder="Enter any additional notes about this document"
            rows={4}
          />
        </Form.Item>
      </Space>
    </div>
  );
});

DocumentEntry.displayName = 'DocumentEntry';