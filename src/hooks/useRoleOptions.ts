import { useMemo } from 'react';

export const useRoleOptions = () => {
  const roleOptions = useMemo(() => [
    { value: 'ceo', label: 'CEO' },
    { value: 'cto', label: 'CTO' },
    { value: 'cfo', label: 'CFO' },
    { value: 'director', label: 'Director' },
    { value: 'manager', label: 'Manager' },
    { value: 'developer', label: 'Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'other', label: 'Other' },
  ], []);

  return { roleOptions };
};