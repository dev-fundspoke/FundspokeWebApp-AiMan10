import React from 'react';
import { Layout } from 'antd';
import { NewCompanyForm } from '../components/company/NewCompanyForm';
import { GlowingText } from '../components/common/GlowingText';
import { useThemeContext } from '../context/ThemeContext';
import { darkTheme } from '../styles/themes/dark';

const { Content } = Layout;

export const NewCompany: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Layout
      className="min-h-screen"
      style={{
        background: isDark ? darkTheme.colors.background.primary : '#FFFFFF',
      }}
    >
      <Content className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <GlowingText 
            className="text-3xl font-semibold mb-8"
            color={darkTheme.colors.accent.primary}
          >
            Add New Company
          </GlowingText>
          <NewCompanyForm />
        </div>
      </Content>
    </Layout>
  );
};