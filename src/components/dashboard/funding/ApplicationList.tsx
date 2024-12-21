import React from 'react';
import { List } from 'antd';
import { ApplicationItem } from './components/ApplicationItem';
import { mockApplications } from '../../../data/mockApplications';
import { useThemeContext } from '../../../context/ThemeContext';
import type { Application } from '../../../types/funding';

interface ApplicationListProps {
  statusFilter: string;
  companyFilter: string;
}

export const ApplicationList: React.FC<ApplicationListProps> = ({
  statusFilter,
  companyFilter,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  const filteredApplications = mockApplications.filter(app => {
    const statusMatch = statusFilter === 'all' || app.status === statusFilter;
    const companyMatch = companyFilter === 'all' || app.companyId === companyFilter;
    return statusMatch && companyMatch;
  });

  return (
    <List
      dataSource={filteredApplications}
      renderItem={(application: Application) => (
        <ApplicationItem key={application.id} {...application} />
      )}
      className={`funding-application-list ${isDark ? 'dark' : ''}`}
      style={{
        background: 'transparent',
      }}
    />
  );
};