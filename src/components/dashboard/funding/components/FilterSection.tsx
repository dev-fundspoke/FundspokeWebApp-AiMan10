import React from 'react';
import { Row, Col, Select } from 'antd';
import { useThemeContext } from '../../../../context/ThemeContext';
import { darkTheme } from '../../../../styles/themes/dark';

const { Option } = Select;

interface FilterSectionProps {
  onStatusChange: (value: string) => void;
  onCompanyChange: (value: string) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  onStatusChange,
  onCompanyChange,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  const selectProps = {
    size: 'large' as const,
    className: 'funding-filter-select',
    style: {
      width: '100%',
    },
    dropdownStyle: {
      backgroundColor: isDark ? darkTheme.colors.background.secondary : '#FFFFFF',
      boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
      padding: '8px',
      borderRadius: '8px',
      border: isDark ? `1px solid ${darkTheme.colors.border.primary}` : '1px solid #E5E7EB',
    },
  };

  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} sm={12} md={8} lg={6}>
        <Select
          placeholder="Filter by status"
          defaultValue="all"
          onChange={onStatusChange}
          {...selectProps}
        >
          <Option value="all">All Status</Option>
          <Option value="submitted">Submitted</Option>
          <Option value="under_review">Under Review</Option>
          <Option value="approved">Approved</Option>
          <Option value="rejected">Rejected</Option>
          <Option value="pending">Pending</Option>
        </Select>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Select
          placeholder="Filter by company"
          defaultValue="all"
          onChange={onCompanyChange}
          {...selectProps}
        >
          <Option value="all">All Companies</Option>
          <Option value="tech_corp">TechCorp Ltd</Option>
          <Option value="innov_ai">InnovAI Solutions</Option>
          <Option value="green_energy">Green Energy Co</Option>
          <Option value="quantum_labs">Quantum Labs</Option>
        </Select>
      </Col>
    </Row>
  );
};