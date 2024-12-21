import type { StatusConfigMap } from './types';

export const statusConfig: StatusConfigMap = {
  submitted: {
    color: '#1890FF',
    label: 'Submitted',
    glow: '0 0 10px rgba(24, 144, 255, 0.5)',
  },
  under_review: {
    color: '#722ED1',
    label: 'Under Review',
    glow: '0 0 10px rgba(114, 46, 209, 0.5)',
  },
  approved: {
    color: '#52C41A',
    label: 'Approved',
    glow: '0 0 10px rgba(82, 196, 26, 0.5)',
  },
  rejected: {
    color: '#FF4D4F',
    label: 'Rejected',
    glow: '0 0 10px rgba(255, 77, 79, 0.5)',
  },
  pending: {
    color: '#FAAD14',
    label: 'Pending',
    glow: '0 0 10px rgba(250, 173, 20, 0.5)',
  },
};