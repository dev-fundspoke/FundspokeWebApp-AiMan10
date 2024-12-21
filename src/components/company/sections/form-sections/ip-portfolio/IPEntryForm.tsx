import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';
import { ipTypes, documentTypes, documentCategories } from '../../../../../types/ip';

interface IPEntryFormProps {
  index: number;
  onDelete: () => void;
}

export const IPEntryForm: React.FC<IPEntryFormProps> = ({
  index,
  onDelete,
}) => {
  const namePrefix = ['ipPortfolio', index];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <GlowingText 
          className="text-lg font-medium"
          color={darkTheme.colors.accent.primary}
        >
          IP Asset {index + 1}
        </GlowingText>
        
        <Button
          danger
          type="primary"
          icon={<DeleteOutlined />}
          onClick={onDelete}
          className="hover:scale-105 transition-transform duration-300"
        >
          Remove IP Asset
        </Button>
      </div>

      <Form.Item
        name={[...namePrefix, 'type']}
        label="IP Type"
        rules={[{ required: true, message: 'Please select IP type' }]}
      >
        <Select placeholder="Select IP type">
          {ipTypes.map(type => (
            <Select.Option key={type} value={type}>{type}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name={[...namePrefix, 'title']}
        label="Title"
        rules={[{ required: true, message: 'Please enter title' }]}
      >
        <Input placeholder="Enter IP title" />
      </Form.Item>

      <Form.Item
        name={[...namePrefix, 'description']}
        label="Description"
        rules={[{ required: true, message: 'Please enter description' }]}
      >
        <Input.TextArea 
          placeholder="Enter IP description"
          rows={4}
        />
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
        name={[...namePrefix, 'fileId']}
        label="Supporting Document"
        help="File upload will be enabled in a future update"
      >
        <Input placeholder="File upload coming soon..." disabled />
      </Form.Item>

      <Form.Item
        name={[...namePrefix, 'notes']}
        label="Notes"
      >
        <Input.TextArea 
          placeholder="Enter additional notes"
          rows={4}
        />
      </Form.Item>
    </div>
  );
};