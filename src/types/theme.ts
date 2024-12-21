export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemedComponentProps {
  className?: string;
  isDark?: boolean;
}