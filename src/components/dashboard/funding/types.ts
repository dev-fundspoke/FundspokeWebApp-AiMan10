// Remove unused Application import and export only what's needed
import type { ApplicationStatus } from '../../../types/funding';

export interface StatusConfig {
  color: string;
  label: string;
  glow: string;
}

export type StatusConfigMap = Record<ApplicationStatus, StatusConfig>;

export interface FilterProps {
  onStatusChange: (value: string) => void;
  onCompanyChange: (value: string) => void;
}