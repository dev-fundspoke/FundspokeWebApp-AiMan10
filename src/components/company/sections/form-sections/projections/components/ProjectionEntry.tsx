import React from 'react';
import { Form, InputNumber, DatePicker, Select, Input, Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { GlowingText } from '../../../../../common/GlowingText';
import { darkTheme } from '../../../../../../styles/themes/dark';
import { confidenceLevels } from '../../../../../../types/projections';

interface ProjectionEntryProps {
  index: number;
  onDelete: () => void;
  isLastEntry: boolean;
}

export const ProjectionEntry: React.FC<ProjectionEntryProps> = ({
  index,
  onDelete,
  isLastEntry,
}) => {
  const namePrefix = ['projections', 'futureRevenueProjections', index];

  return (
    <div className="space-y-6 p-6 rounded-lg bg-opacity-10 bg-white">
      <div className="flex justify-between items-center mb-6">
        <GlowingText 
          className="text-lg font-medium"
          color={darkTheme.colors.accent.primary}
        >
          Projection {index + 1}
        </GlowingText>
        
        {!isLastEntry && (
          <Button
            danger
            type="primary"
            icon={<DeleteOutlined />}
            onClick={onDelete}
            className="hover:scale-105 transition-transform duration-300"
          >
            Remove Projection
          </Button>
        )}
      </div>

      <Space direction="vertical" className="w-full" size="large">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.Item
            name={[...namePrefix, 'startDate']}
            label="Start Date"
            rules={[{ required: true, message: 'Please select start date' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>

          <Form.Item
            name={[...namePrefix, 'endDate']}
            label="End Date"
            rules={[{ required: true, message: 'Please select end date' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
        </div>

        <Form.Item
          name={[...namePrefix, 'amount']}
          label="Projected Amount"
          rules={[
            { required: true, message: 'Please enter projected amount' },
            { type: 'number', min: 0, message: 'Amount must be non-negative' }
          ]}
        >
          <InputNumber
            className="w-full"
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => Number(value!.replace(/\$\s?|(,*)/g, ''))}
            placeholder="Enter projected amount"
          />
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'confidenceLevel']}
          label="Confidence Level"
          rules={[{ required: true, message: 'Please select confidence level' }]}
        >
          <Select placeholder="Select confidence level">
            {confidenceLevels.map(level => (
              <Select.Option key={level} value={level}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name={[...namePrefix, 'projectionSources']}
          label="Projection Sources"
          rules={[{ required: true, message: 'Please enter projection sources' }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Enter sources and methodology used for this projection"
          />
        </Form.Item>
      </Space>
    </div>
  );
};