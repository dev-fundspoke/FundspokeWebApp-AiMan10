import React from 'react';
import { Card, Row, Col, Progress } from 'antd';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Metric, ChartData } from '../../types/dashboard';

const metrics: Metric[] = [
  { title: 'Grants Applied', value: 45, color: '#1677ff' },
  { title: 'Success Rate', value: 78, suffix: '%', color: '#52c41a' },
  { title: 'Active Claims', value: 12, color: '#722ed1' },
  { title: 'Pending Actions', value: 8, color: '#faad14' },
];

const chartData: ChartData[] = [
  { name: 'Jan', value: 12 },
  { name: 'Feb', value: 19 },
  { name: 'Mar', value: 15 },
  { name: 'Apr', value: 25 },
  { name: 'May', value: 32 },
  { name: 'Jun', value: 28 },
];

export const MetricsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        {metrics.map((metric, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-600">{metric.title}</h3>
                <div className="mt-4">
                  <Progress
                    type="dashboard"
                    percent={metric.value}
                    format={(percent) => `${percent}${metric.suffix || ''}`}
                    strokeColor={metric.color}
                  />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Card title="Funding Applications Trend">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#1677ff" 
                fill="#1677ff" 
                fillOpacity={0.2} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};