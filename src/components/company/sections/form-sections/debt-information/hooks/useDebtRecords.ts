import { useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { FormInstance } from 'antd/es/form';
import type { DebtRecord } from '../../../../../../types/debt';

export const useDebtRecords = (form: FormInstance) => {
  const [recordIds, setRecordIds] = useState<string[]>([uuidv4()]);

  const addRecord = () => {
    setRecordIds(prev => [...prev, uuidv4()]);
  };

  const removeRecord = (index: number) => {
    setRecordIds(prev => prev.filter((_, i) => i !== index));
    
    const debts = form.getFieldValue('debts') || [];
    debts.splice(index, 1);
    form.setFieldValue('debts', debts);
  };

  const summary = useMemo(() => {
    const debts = form.getFieldValue('debts') || [];
    
    if (debts.length === 0) {
      return 'Debt Information';
    }

    const totalAmount = debts.reduce((sum: number, record: DebtRecord) => 
      sum + (record?.currentDebtAmount || 0), 0);

    return `Debt Information (${debts.length} record${debts.length === 1 ? '' : 's'}, Total: $${totalAmount.toLocaleString()})`;
  }, [form.getFieldValue('debts')]);

  return {
    recordIds,
    addRecord,
    removeRecord,
    summary,
  };
};