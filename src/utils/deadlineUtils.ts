import type { DeadlineStatus } from '../types/deadline';

export const getDeadlineStatus = (dueDate: Date): DeadlineStatus => {
  const now = new Date();
  const daysUntilDue = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysUntilDue < 0) return 'overdue';
  if (daysUntilDue <= 7) return 'dueSoon';
  return 'upcoming';
};

export const calculateProgress = (creationDate: Date, dueDate: Date): number => {
  const now = new Date();
  const totalDuration = dueDate.getTime() - creationDate.getTime();
  const elapsed = now.getTime() - creationDate.getTime();
  
  return Math.min(100, Math.max(0, Math.round((elapsed / totalDuration) * 100)));
};

export const getDaysUntilDue = (dueDate: Date): number => {
  const now = new Date();
  return Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
};