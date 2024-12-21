export type DeadlineStatus = 'upcoming' | 'dueSoon' | 'overdue';

export interface DeadlineItem {
  id: string;
  title: string;
  dueDate: Date;
  creationDate: Date;
  description?: string;
  companyName: string;
  type: 'application' | 'document' | 'review';
}

export interface DeadlineStatusConfig {
  color: string;
  glow: string;
  label: string;
}