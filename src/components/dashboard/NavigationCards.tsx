import React from 'react';
import { Card, Row, Col } from 'antd';
import { 
  PlusCircleOutlined, 
  LineChartOutlined, 
  FormOutlined, 
  AppstoreOutlined 
} from '@ant-design/icons';

const navigationItems = [
  {
    title: 'Add a New Company',
    icon: <PlusCircleOutlined className="text-3xl text-primary" />,
    description: 'Register and manage new companies',
  },
  {
    title: 'AI Indicator Dashboard',
    icon: <LineChartOutlined className="text-3xl text-green-500" />,
    description: 'View AI-powered insights and metrics',
  },
  {
    title: 'Create Funding Application',
    icon: <FormOutlined className="text-3xl text-blue-500" />,
    description: 'Start a new funding application',
  },
  {
    title: 'Application Management',
    icon: <AppstoreOutlined className="text-3xl text-purple-500" />,
    description: 'Manage existing applications',
  },
];

export const NavigationCards: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      {navigationItems.map((item, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <Card 
            hoverable 
            className="text-center h-full cursor-pointer transition-all hover:shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};