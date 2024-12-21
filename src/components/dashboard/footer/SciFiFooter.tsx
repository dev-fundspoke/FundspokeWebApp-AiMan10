import React from 'react';
import { Layout } from 'antd';
import { GlowingText } from '../../common/GlowingText';
import { darkTheme } from '../../../styles/themes/dark';

const { Footer } = Layout;

export const SciFiFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <Footer
      style={{
        background: darkTheme.effects.glass.background,
        backdropFilter: `blur(${darkTheme.effects.glass.blur})`,
        borderTop: `1px solid ${darkTheme.effects.glass.border}`,
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-6 mb-4 md:mb-0">
          {['Privacy Policy', 'Terms of Service', 'Support'].map((text) => (
            <a
              key={text}
              href="#"
              className="hover:scale-110 transition-transform duration-300 inline-block"
              style={{ color: darkTheme.colors.text.secondary }}
            >
              {text}
            </a>
          ))}
        </div>
        
        <GlowingText 
          className="text-sm"
          color={darkTheme.colors.text.secondary}
          intensity="low"
        >
          © {year} FundSpoke. All Rights Reserved.
        </GlowingText>
      </div>
    </Footer>
  );
};