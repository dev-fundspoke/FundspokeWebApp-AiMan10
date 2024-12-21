import React from 'react';
import { Form, Input } from 'antd';

export const BasicInformation: React.FC = () => {
  return (
    <div className="space-y-6">
      <Form.Item
        label="Company Name (English)"
        name={['companyName', 'en']}
        rules={[{ required: true, message: 'Please enter company name in English' }]}
      >
        <Input placeholder="Enter company name in English" />
      </Form.Item>

      <Form.Item
        label="Company Name (French)"
        name={['companyName', 'fr']}
        rules={[{ required: true, message: 'Please enter company name in French' }]}
      >
        <Input placeholder="Enter company name in French" />
      </Form.Item>

      <Form.Item
        label="Company Overview"
        name="companyOverview"
        rules={[
          { required: true, message: 'Please provide a company overview' },
          { min: 150, message: 'Overview must be at least 150 words' },
          { max: 250, message: 'Overview must not exceed 250 words' }
        ]}
      >
        <Input.TextArea 
          rows={6} 
          placeholder="Brief description of the company (150-250 words)"
          showCount={{
            formatter: ({ value = '' }) => {
              const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
              return `${wordCount} words`;
            },
          }}
        />
      </Form.Item>

      <Form.Item
        label="Legal Name"
        name="legalName"
        rules={[{ required: true, message: 'Please enter legal name' }]}
      >
        <Input placeholder="Enter legal name" />
      </Form.Item>

      <Form.Item
        label="Fundspoke Representative"
        name="fundspokeRepresentative"
        rules={[{ required: true, message: 'Please enter Fundspoke representative' }]}
      >
        <Input placeholder="Enter Fundspoke representative name" />
      </Form.Item>
    </div>
  );
};