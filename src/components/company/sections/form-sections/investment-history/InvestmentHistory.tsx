import React, { useState, useMemo } from 'react';
import { Form, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { InvestmentRecordEntry } from './InvestmentRecordEntry';
import { SciFiCard } from '../../../../common/SciFiCard';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';
import type { InvestmentRecord } from '../../../../../types/investment';

export const InvestmentHistory: React.FC = () => {
  const [recordIds, setRecordIds] = useState<string[]>([uuidv4()]);
  const form = Form.useFormInstance();

  const addRecord = () => {
    setRecordIds(prev => [...prev, uuidv4()]);
  };

  const removeRecord = (index: number) => {
    setRecordIds(prev => prev.filter((_, i) => i !== index));
    
    // Update form values
    const investments = form.getFieldValue('investments') || [];
    investments.splice(index, 1);
    form.setFieldValue('investments', investments);
  };

  const getInvestmentSummary = useMemo(() => {
    const investments = form.getFieldValue('investments') || [];
    
    if (investments.length === 0) {
      return 'Investment History';
    }

    const totalAmount = investments.reduce((sum: number, record: InvestmentRecord) => 
      sum + (record?.amountReceived || 0), 0);

    return `Investment History (${investments.length} record${investments.length === 1 ? '' : 's'}, Total: $${totalAmount.toLocaleString()})`;
  }, [form.getFieldValue('investments')]);

  return (
    <div className="space-y-8">
      <GlowingText 
        className="text-xl font-semibold mb-4"
        color={darkTheme.colors.accent.primary}
      >
        {getInvestmentSummary}
      </GlowingText>

      {recordIds.map((id, index) => (
        <SciFiCard key={id} className="p-6">
          <InvestmentRecordEntry
            index={index}
            onDelete={() => removeRecord(index)}
            isLastEntry={recordIds.length === 1}
          />
        </SciFiCard>
      ))}

      <div className="flex justify-center">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={addRecord}
          size="large"
          style={{
            background: darkTheme.colors.accent.primary,
            borderColor: darkTheme.colors.accent.primary,
            minWidth: '200px',
            height: '44px',
          }}
          className="hover:scale-105 transition-transform duration-300"
        >
          Add Another Investment
        </Button>
      </div>
    </div>
  );
};