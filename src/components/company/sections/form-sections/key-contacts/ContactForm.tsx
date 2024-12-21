import React from 'react';
import { Form, Input } from 'antd';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';

interface ContactFormProps {
  namePrefix: string[];
  title: string;
  required?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  namePrefix,
  title,
  required = true,
}) => (
  <div className="space-y-6">
    <GlowingText 
      className="text-lg font-medium mb-4"
      color={darkTheme.colors.accent.primary}
    >
      {title}
    </GlowingText>

    <Form.Item
      name={[...namePrefix, 'name']}
      label="Name"
      rules={[{ required, message: 'Please enter name' }]}
    >
      <Input placeholder="Enter full name" />
    </Form.Item>

    <Form.Item
      name={[...namePrefix, 'role']}
      label="Role"
      rules={[{ required, message: 'Please enter role' }]}
    >
      <Input placeholder="Enter role" />
    </Form.Item>

    <Form.Item
      name={[...namePrefix, 'contactInfo', 'email']}
      label="Email"
      rules={[
        { required, message: 'Please enter email' },
        { type: 'email', message: 'Please enter a valid email' }
      ]}
    >
      <Input placeholder="Enter email address" />
    </Form.Item>

    <Form.Item
      name={[...namePrefix, 'contactInfo', 'phone']}
      label="Phone"
      rules={[{ required, message: 'Please enter phone number' }]}
    >
      <Input placeholder="Enter phone number" />
    </Form.Item>

    <Form.Item
      name={[...namePrefix, 'linkedInProfile']}
      label="LinkedIn Profile"
      rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
    >
      <Input placeholder="Enter LinkedIn URL" />
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