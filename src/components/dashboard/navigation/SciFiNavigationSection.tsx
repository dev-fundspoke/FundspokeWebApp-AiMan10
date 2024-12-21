import React from 'react';
import { Row, Col } from 'antd';
import { SciFiNavigationCard } from './SciFiNavigationCard';
import { SciFiCollapsibleCharts } from '../charts/SciFiCollapsibleCharts';
import { GlowingText } from '../../common/GlowingText';
import { useThemeContext } from '../../../context/ThemeContext';
import { darkTheme } from '../../../styles/themes/dark';
import { navigationItems } from '../../../data/navigationItems';

export const SciFiNavigationSection: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <section 
      className="py-6 md:py-8 rounded-2xl mx-auto max-w-[1440px]"
      style={{
        background: isDark 
          ? darkTheme.effects.glass.background
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: `blur(${darkTheme.effects.glass.blur})`,
      }}
    >
      <div className="px-4 md:px-6">
        <GlowingText 
          className="text-xl md:text-2xl font-display font-semibold mb-4 md:mb-6"
          color={isDark ? darkTheme.colors.accent.primary : darkTheme.colors.accent.secondary}
          intensity="medium"
        >
          Quick Access
        </GlowingText>
        
        <Row 
          gutter={[
            { xs: 8, sm: 12, md: 16, lg: 16 },
            { xs: 8, sm: 12, md: 16, lg: 16 }
          ]}
        >
          {navigationItems.map((item, index) => (
            <Col 
              xs={24}
              sm={12}
              lg={6}
              key={index}
              className="flex"
            >
              <SciFiNavigationCard {...item} />
            </Col>
          ))}
        </Row>

        <SciFiCollapsibleCharts />
      </div>
    </section>
  );
};