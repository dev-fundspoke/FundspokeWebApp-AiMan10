import { ThemeConfig } from 'antd';
import { designSystem } from '../styles/design-system';

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