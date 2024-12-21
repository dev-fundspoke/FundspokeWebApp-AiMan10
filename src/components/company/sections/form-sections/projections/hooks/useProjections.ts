import { useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { FormInstance } from 'antd/es/form';
import type { ProjectionEntry } from '../../../../../../types/projections';

export const useProjections = (form: FormInstance) => {
  const [projectionIds, setProjectionIds] = useState<string[]>([uuidv4()]);

  const addProjection = () => {
    setProjectionIds(prev => [...prev, uuidv4()]);
  };

  const removeProjection = (index: number) => {
    setProjectionIds(prev => prev.filter((_, i) => i !== index));
    
    const projections = form.getFieldValue(['projections', 'futureRevenueProjections']) || [];
    projections.splice(index, 1);
    form.setFieldValue(['projections', 'futureRevenueProjections'], projections);
  };

  const summary = useMemo(() => {
    const projections = form.getFieldValue(['projections', 'futureRevenueProjections']) || [];
    
    if (projections.length === 0) {
      return 'Revenue Projections & Growth Plans';
    }

    const totalProjected = projections.reduce((sum: number, entry: ProjectionEntry) => 
      sum + (entry?.amount || 0), 0);

    return `Revenue Projections & Growth Plans (${projections.length} projection${projections.length === 1 ? '' : 's'}, Total: $${totalProjected.toLocaleString()})`;
  }, [form.getFieldValue(['projections', 'futureRevenueProjections'])]);

  return {
    projectionIds,
    addProjection,
    removeProjection,
    summary,
  };
};