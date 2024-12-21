import { ReactNode } from 'react';

export interface NavigationItem {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  glowColor?: string;
  route?: string;
}

export interface NavigationCardProps extends NavigationItem {}