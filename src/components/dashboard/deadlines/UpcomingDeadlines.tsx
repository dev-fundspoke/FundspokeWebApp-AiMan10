import React, { useState } from 'react';
import { Row, Col, Select, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { SciFiCard } from '../../common/SciFiCard';
import { GlowingText } from '../../common/GlowingText';
import { DeadlinesList } from './DeadlinesList';
import { useThemeContext } from '../../../context/ThemeContext';
import { darkTheme } from '../../../styles/themes/dark';

const { Option } = Select;

export const UpcomingDeadlines: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  return (
    <section className="py-10">
      <div className="flex justify-between items-center mb-6">
        <GlowingText 
          className="text-2xl font-semibold"
          color={isDark ? darkTheme.colors.accent.primary : '#1890FF'}
        >
          Upcoming Deadlines
        </GlowingText>

        <Button 
          type="primary"
          icon={<PlusOutlined />}
          size="large"
        >
          Add Deadline
        </Button>
      </div>

      <SciFiCard className="p-6">
        <Row gutter={[16, 16]} className="mb-6">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Select
              placeholder="Filter by status"
              className="w-full"
              defaultValue="all"
              onChange={setStatusFilter}
              size="large"
            >
              <Option value="all">All Status</Option>
              <Option value="upcoming">Upcoming</Option>
              <Option value="due_soon">Due Soon</Option>
              <Option value="overdue">Overdue</Option>
            </Select>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Select
              placeholder="Filter by type"
              className="w-full"
              defaultValue="all"
              onChange={setTypeFilter}
              size="large"
            >
              <Option value="all">All Types</Option>
              <Option value="application">Applications</Option>
              <Option value="document">Documents</Option>
              <Option value="review">Reviews</Option>
            </Select>
          </Col>
        </Row>

        <DeadlinesList 
          statusFilter={statusFilter}
          typeFilter={typeFilter}
        />
      </SciFiCard>
    </section>
  );
};