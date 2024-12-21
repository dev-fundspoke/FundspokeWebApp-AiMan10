import React, { useState, useMemo } from 'react';
import { Form, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { FinancialYearEntry } from './FinancialYearEntry';
import { FinancialStatementsUpload } from './FinancialStatementsUpload';
import { SciFiCard } from '../../../../common/SciFiCard';
import { GlowingText } from '../../../../common/GlowingText';
import { darkTheme } from '../../../../../styles/themes/dark';
import type { FinancialYear } from '../../../../../types/financials';

export const Financials: React.FC = () => {
  const [yearIds, setYearIds] = useState<string[]>([uuidv4()]);
  const form = Form.useFormInstance();

  const addYear = () => {
    setYearIds(prev => [...prev, uuidv4()]);
  };

  const removeYear = (index: number) => {
    setYearIds(prev => prev.filter((_, i) => i !== index));
    
    // Update form values
    const financials = form.getFieldValue('financials') || {};
    const years = financials.years || [];
    years.splice(index, 1);
    form.setFieldValue(['financials', 'years'], years);
  };

  const getFinancialsSummary = useMemo(() => {
    const financials = form.getFieldValue('financials') || {};
    const years = financials.years || [];
    
    if (years.length === 0) {
      return 'Financial Information';
    }

    const totalRevenue = years.reduce((sum: number, year: FinancialYear) => 
      sum + (year?.revenue || 0), 0);

    return `Financial Information (${years.length} year${years.length === 1 ? '' : 's'}, Total Revenue: $${totalRevenue.toLocaleString()})`;
  }, [form.getFieldValue('financials')]);

  return (
    <div className="space-y-8">
      <GlowingText 
        className="text-xl font-semibold mb-4"
        color={darkTheme.colors.accent.primary}
      >
        {getFinancialsSummary}
      </GlowingText>

      {yearIds.map((id, index) => (
        <SciFiCard key={id} className="p-6">
          <FinancialYearEntry
            index={index}
            onDelete={() => removeYear(index)}
            isLastEntry={yearIds.length === 1}
          />
        </SciFiCard>
      ))}

      <SciFiCard className="p-6">
        <FinancialStatementsUpload />
      </SciFiCard>

      <div className="flex justify-center">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={addYear}
          size="large"
          style={{
            background: darkTheme.colors.accent.primary,
            borderColor: darkTheme.colors.accent.primary,
            minWidth: '200px',
            height: '44px',
          }}
          className="hover:scale-105 transition-transform duration-300"
        >
          Add Another Year
        </Button>
      </div>
    </div>
  );
};