import React from 'react';
import { Row, Col } from 'antd';
import { FuturisticNavigationCard } from './FuturisticNavigationCard';
import { GlowingText } from '../../common/GlowingText';
import {
  RocketOutlined,
  RadarChartOutlined,
  ExperimentOutlined,
  ApiOutlined,
} from '@ant-design/icons';
import { useThemeContext } from '../../../context/ThemeContext';
import { designSystem } from '../../../styles/design-system';

const navigationItems = [
  {
    icon: <RocketOutlined className="transition-colors" />,
    title: 'Launch New Company',
    description: 'Initialize a new company profile with our AI-powered setup wizard.',
    buttonText: 'Launch Setup',
    glowColor: designSystem.colors.primary[500],
  },
  {
    icon: <RadarChartOutlined className="transition-colors" />,
    title: 'AI Analytics Hub',
    description: 'Access real-time AI metrics and performance indicators.',
    buttonText: 'View Analytics',
    glowColor: designSystem.colors.secondary[500],
  },
  {
    icon: <ExperimentOutlined className="transition-colors" />,
    title: 'Quantum Funding',
    description: 'Create next-gen funding applications with quantum-inspired algorithms.',
    buttonText: 'Initialize',
    glowColor: designSystem.colors.accent[500],
  },
  {
    icon: <ApiOutlined className="transition-colors" />,
    title: 'Neural Network',
    description: 'Manage your interconnected applications and data streams.',
    buttonText: 'Connect',
    glowColor: designSystem.colors.secondary[400],
  },
];

export const NavigationSection: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <section 
      className={`py-8 rounded-2xl transition-all duration-300`}
      style={{
        background: isDark 
          ? 'linear-gradient(180deg, rgba(10, 15, 30, 0.8) 0%, rgba(20, 27, 45, 0.8) 100%)'
          : 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 242, 245, 0.8) 100%)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="px-6">
        <GlowingText 
          className="text-2xl font-display font-semibold mb-6"
          color={isDark ? designSystem.colors.primary[400] : designSystem.colors.primary[600]}
          intensity="medium"
        >
          Neural Command Center
        </GlowingText>
        <Row gutter={[16, 16]}>
          {navigationItems.map((item, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <FuturisticNavigationCard {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};