import React from 'react';
import { Layout } from 'antd';
import { GlowingText } from '../common/GlowingText';
import { useThemeContext } from '../../context/ThemeContext';
import { designSystem } from '../../styles/design-system';

const { Footer } = Layout;

export const FuturisticFooter: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const year = new Date().getFullYear();

  const linkStyle = {
    color: isDark ? designSystem.colors.primary[400] : designSystem.colors.primary[500],
    textShadow: `0 0 10px ${designSystem.colors.primary[500]}40`,
    transition: 'all 0.3s ease',
  };

  return (
    <Footer 
      className="mt-8"
      style={{ 
        background: isDark 
          ? 'linear-gradient(0deg, rgba(10, 15, 30, 0.95) 0%, rgba(20, 27, 45, 0.9) 100%)'
          : 'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 242, 245, 0.9) 100%)',
        backdropFilter: 'blur(8px)',
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-6 mb-4 md:mb-0">
          {['Privacy Policy', 'Terms of Service', 'Support'].map((text) => (
            <a
              key={text}
              href="#"
              className="hover:scale-110 transition-transform duration-300 inline-block"
              style={linkStyle}
            >
              {text}
            </a>
          ))}
        </div>
        <GlowingText 
          className="text-sm"
          color={isDark ? designSystem.colors.neutral[400] : designSystem.colors.neutral[600]}
          intensity="low"
        >
          © {year} FundSpoke. All Rights Reserved.
        </GlowingText>
      </div>
    </Footer>
  );
};