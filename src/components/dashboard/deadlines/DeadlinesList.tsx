import React from 'react';
import { List } from 'antd';
import { DeadlineItem } from './DeadlineItem';
import { mockDeadlines } from '../../../data/mockDeadlines';
import { getDeadlineStatus } from '../../../utils/deadlineUtils';
import type { DeadlineItem as DeadlineItemType } from '../../../types/deadline';

interface DeadlinesListProps {
  statusFilter: string;
  typeFilter: string;
}

export const DeadlinesList: React.FC<DeadlinesListProps> = ({
  statusFilter,
  typeFilter,
}) => {
  const filteredDeadlines = mockDeadlines
    .filter(deadline => {
      const currentStatus = getDeadlineStatus(deadline.dueDate);
      const statusMatch = statusFilter === 'all' || currentStatus === statusFilter;
      const typeMatch = typeFilter === 'all' || deadline.type === typeFilter;
      return statusMatch && typeMatch;
    })
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

  return (
    <List
      dataSource={filteredDeadlines}
      renderItem={(deadline: DeadlineItemType) => (
        <DeadlineItem key={deadline.id} {...deadline} />
      )}
      className="deadlines-list"
    />
  );
};