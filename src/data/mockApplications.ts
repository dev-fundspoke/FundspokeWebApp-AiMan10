import type { Application } from '../types/funding';

export const mockApplications: Application[] = [
  {
    id: '1',
    companyName: 'TechCorp Ltd',
    companyId: 'tech_corp',
    status: 'approved',
    submissionDate: '2024-02-15',
    fundingAmount: 250000,
  },
  {
    id: '2',
    companyName: 'InnovAI Solutions',
    companyId: 'innov_ai',
    status: 'under_review',
    submissionDate: '2024-02-14',
    fundingAmount: 500000,
  },
  {
    id: '3',
    companyName: 'Green Energy Co',
    companyId: 'green_energy',
    status: 'submitted',
    submissionDate: '2024-02-13',
    fundingAmount: 750000,
  },
  {
    id: '4',
    companyName: 'Quantum Labs',
    companyId: 'quantum_labs',
    status: 'pending',
    submissionDate: '2024-02-12',
    fundingAmount: 1000000,
  },
  {
    id: '5',
    companyName: 'TechCorp Ltd',
    companyId: 'tech_corp',
    status: 'rejected',
    submissionDate: '2024-02-11',
    fundingAmount: 300000,
  },
];