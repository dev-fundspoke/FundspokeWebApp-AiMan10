import { ReactNode } from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface GlowProps extends BaseComponentProps {
  glowColor?: 'primary' | 'secondary' | 'tertiary';
  glowIntensity?: 'low' | 'medium' | 'high';
}

export interface AnimationProps {
  isAnimated?: boolean;
  animationDelay?: number;
}