import React from 'react';
import { Form, Select } from 'antd';
import { organizationTypes, sectors, companyStatuses } from '../../../../constants/company';

export const OrganizationDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: 'Please select status' }]}
        tooltip="Current operational status of the company"
      >
        <Select placeholder="Select status">
          {companyStatuses.map(status => (
            <Select.Option key={status} value={status}>{status}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Organization Type"
        name="organizationType"
        rules={[{ required: true, message: 'Please select organization type' }]}
        tooltip="Legal structure of the organization"
      >
        <Select placeholder="Select organization type">
          {organizationTypes.map(type => (
            <Select.Option key={type} value={type}>{type}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Sector"
        name="sector"
        rules={[
          { required: true, message: 'Please select at least one sector' },
          { type: 'array', min: 1, message: 'Please select at least one sector' },
        ]}
        tooltip="Primary business sectors of operation"
      >
        <Select 
          mode="multiple" 
          placeholder="Select sectors"
          optionFilterProp="children"
          maxTagCount={3}
          showSearch
        >
          {sectors.map(sector => (
            <Select.Option key={sector} value={sector}>{sector}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};