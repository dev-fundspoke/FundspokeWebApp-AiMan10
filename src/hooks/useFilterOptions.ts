import { useMemo } from 'react';
import type { FilterOption } from '../types/filters';

export const useFilterOptions = () => {
  const dateRangeOptions = useMemo<FilterOption[]>(() => [
    { value: '7days', label: 'Last 7 days' },
    { value: '30days', label: 'Last 30 days' },
    { value: '1year', label: 'Last year' },
    { value: 'custom', label: 'Custom Range' },
  ], []);

  const companyOptions = useMemo<FilterOption[]>(() => [
    { value: 'companyA', label: 'Company A' },
    { value: 'companyB', label: 'Company B' },
    { value: 'companyC', label: 'Company C' },
  ], []);

  const statusOptions = useMemo<FilterOption[]>(() => [
    { value: 'approved', label: 'Approved' },
    { value: 'pending', label: 'Pending' },
    { value: 'archived', label: 'Archived' },
  ], []);

  return {
    dateRangeOptions,
    companyOptions,
    statusOptions,
  };
};