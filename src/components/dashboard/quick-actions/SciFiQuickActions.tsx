import React from 'react';
import { Row, Col } from 'antd';
import { SciFiQuickAction } from './SciFiQuickAction';
import {
  RocketOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const quickActions = [
  {
    icon: <RocketOutlined />,
    label: 'Launch Project',
    glowColor: 'primary' as const,
  },
  {
    icon: <AppstoreOutlined />,
    label: 'Applications',
    glowColor: 'secondary' as const,
  },
  {
    icon: <BarChartOutlined />,
    label: 'Analytics',
    glowColor: 'tertiary' as const,
  },
  {
    icon: <TeamOutlined />,
    label: 'Team',
    glowColor: 'primary' as const,
  },
];

export const SciFiQuickActions: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      {quickActions.map((action, index) => (
        <Col xs={12} sm={6} key={index}>
          <SciFiQuickAction
            {...action}
            onClick={() => console.log(`Clicked ${action.label}`)}
          />
        </Col>
      ))}
    </Row>
  );
};