import { 
  RocketOutlined, 
  RadarChartOutlined, 
  ExperimentOutlined, 
  ApiOutlined,
} from '@ant-design/icons';
import type { NavigationItem } from '../types/navigation';

export const navigationItems: NavigationItem[] = [
  {
    icon: <RocketOutlined />,
    title: 'Add New Company',
    description: 'Create & manage company profiles with our AI-powered system',
    buttonText: 'Start New Company',
    glowColor: '#1890FF',
    route: '/new-company',
  },
  {
    icon: <RadarChartOutlined />,
    title: 'AI Analytics Hub',
    description: 'Access real-time AI metrics and performance indicators',
    buttonText: 'View Analytics',
    glowColor: '#722ED1',
  },
  {
    icon: <ExperimentOutlined />,
    title: 'Quantum Funding',
    description: 'Create next-gen funding applications with quantum-inspired algorithms',
    buttonText: 'Initialize',
    glowColor: '#13C2C2',
  },
  {
    icon: <ApiOutlined />,
    title: 'Neural Network',
    description: 'Manage your interconnected applications and data streams',
    buttonText: 'Connect',
    glowColor: '#2ECC71',
  },
];