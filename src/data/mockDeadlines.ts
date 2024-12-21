import type { DeadlineItem } from '../types/deadline';

const generateDeadlines = (): DeadlineItem[] => {
  return [
    {
      id: '1',
      title: 'Q1 Grant Application',
      companyName: 'TechCorp Ltd',
      creationDate: new Date('2024-02-01'),
      dueDate: new Date('2024-03-15'),
      type: 'application',
      description: 'Submit Q1 innovation grant application',
    },
    {
      id: '2',
      title: 'Financial Documents',
      companyName: 'InnovAI Solutions',
      creationDate: new Date('2024-02-15'),
      dueDate: new Date('2024-03-10'),
      type: 'document',
      description: 'Upload updated financial statements',
    },
    {
      id: '3',
      title: 'Project Review',
      companyName: 'Green Energy Co',
      creationDate: new Date('2024-02-10'),
      dueDate: new Date('2024-03-05'),
      type: 'review',
      description: 'Complete project milestone review',
    },
    {
      id: '4',
      title: 'Research Grant',
      companyName: 'Quantum Labs',
      creationDate: new Date('2024-02-20'),
      dueDate: new Date('2024-03-20'),
      type: 'application',
      description: 'Submit research grant proposal',
    },
    {
      id: '5',
      title: 'Compliance Review',
      companyName: 'TechCorp Ltd',
      creationDate: new Date('2024-02-25'),
      dueDate: new Date('2024-03-12'),
      type: 'review',
      description: 'Complete compliance documentation review',
    },
  ];
};

export const mockDeadlines = generateDeadlines();