import type { ThemeConfig } from 'antd';
import { designSystem } from '../styles/design-system';

type HoverEffect = {
  transform: string;
  boxShadow: string;
};

export const getAntdTheme = (isDark: boolean): ThemeConfig => ({
  token: {
    colorPrimary: designSystem.colors.primary[500],
    colorSuccess: designSystem.colors.accent[500],
    colorInfo: designSystem.colors.secondary[500],
    colorBgContainer: isDark ? designSystem.colors.dark.card : designSystem.colors.neutral[50],
    colorText: isDark ? designSystem.colors.neutral[100] : designSystem.colors.neutral[900],
    colorTextSecondary: isDark ? designSystem.colors.neutral[400] : designSystem.colors.neutral[500],
    borderRadius: parseInt(designSystem.borderRadius.lg),
    fontFamily: designSystem.typography.fontFamily.sans,
    boxShadow: designSystem.shadows.DEFAULT,
  },
  components: {
    Button: {
      borderRadius: parseInt(designSystem.borderRadius.lg),
      controlHeight: 40,
      fontSize: parseInt(designSystem.typography.fontSize.base),
      paddingContentHorizontal: parseInt(designSystem.spacing[6]),
      colorPrimaryHover: designSystem.colors.primary[400],
      boxShadow: designSystem.shadows.glow,
    },
    Card: {
      borderRadiusLG: parseInt(designSystem.borderRadius.xl),
      boxShadowTertiary: designSystem.shadows.lg,
      paddingLG: parseInt(designSystem.spacing[6]),
      colorBgContainer: isDark 
        ? 'rgba(20, 27, 45, 0.7)' 
        : 'rgba(255, 255, 255, 0.7)',
    },
    Select: {
      borderRadius: parseInt(designSystem.borderRadius.lg),
      controlHeight: 40,
      colorBgContainer: isDark 
        ? designSystem.colors.dark.card 
        : designSystem.colors.neutral[50],
    },
    Input: {
      borderRadius: parseInt(designSystem.borderRadius.lg),
      controlHeight: 40,
      colorBgContainer: isDark 
        ? designSystem.colors.dark.card 
        : designSystem.colors.neutral[50],
    },
  },
});

export const theme = {
  colors: {
    // ... existing colors
  },
  effects: {
    card: {
      hover: (isDark: boolean): HoverEffect => ({
        transform: 'translateY(-2px)',
        boxShadow: isDark 
          ? '0 8px 24px rgba(0, 0, 0, 0.2)' 
          : '0 4px 12px rgba(0, 0, 0, 0.1)',
      }),
    },
    glow: {
      success: '0 0 12px rgba(46, 204, 113, 0.4)',
      error: '0 0 12px rgba(231, 76, 60, 0.4)',
      info: '0 0 12px rgba(52, 152, 219, 0.4)',
    },
  },
};