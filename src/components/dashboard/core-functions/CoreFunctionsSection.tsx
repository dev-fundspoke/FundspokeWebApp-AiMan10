import React from 'react';
import { Row, Col } from 'antd';
import { CoreFunctionCard } from './CoreFunctionCard';
import { GlowingText } from '../../common/GlowingText';
import { navigationItems } from '../../../data/navigationItems';

export const CoreFunctionsSection: React.FC = () => {
  return (
    <section className="py-10">
      <GlowingText 
        className="text-2xl font-semibold mb-8"
        color="#1890FF"
      >
        Core Functions
      </GlowingText>
      
      <Row gutter={[24, 24]}>
        {navigationItems.map((func, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <CoreFunctionCard {...func} />
          </Col>
        ))}
      </Row>
    </section>
  );
};