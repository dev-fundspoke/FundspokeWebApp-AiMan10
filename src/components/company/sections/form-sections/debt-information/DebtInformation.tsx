import React from 'react';
import { Form, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DebtRecordEntry } from './DebtRecordEntry';
import { SciFiCard } from '../../../../common/SciFiCard';
import { GlowingText } from '../../../../common/GlowingText';
import { useDebtRecords } from './hooks/useDebtRecords';
import { darkTheme } from '../../../../../styles/themes/dark';

export const DebtInformation: React.FC = () => {
  const form = Form.useFormInstance();
  const { recordIds, addRecord, removeRecord, summary } = useDebtRecords(form);

  return (
    <div className="space-y-8">
      <GlowingText 
        className="text-xl font-semibold mb-4"
        color={darkTheme.colors.accent.primary}
      >
        {summary}
      </GlowingText>

      {recordIds.map((id, index) => (
        <SciFiCard key={id} className="p-6">
          <DebtRecordEntry
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
          Add Another Debt Record
        </Button>
      </div>
    </div>
  );
};