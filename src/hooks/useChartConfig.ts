import { useMemo } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { getBaseChartConfig } from '../utils/chartConfig';

export const useChartConfig = () => {
  const { theme } = useThemeContext();
  
  return useMemo(() => getBaseChartConfig(theme), [theme]);
};