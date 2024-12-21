import React from 'react';
import { Form, InputNumber, Space } from 'antd';
import { GlowingText } from '../../../common/GlowingText';
import { useThemeContext } from '../../../../context/ThemeContext';
import { darkTheme } from '../../../../styles/themes/dark';
import type { DemographicComposition } from '../../../../types/personnel';

interface DemographicCompositionFormProps {
  title: string;
  namePrefix: string[];
}

const demographicFields = [
  { key: 'women', label: 'Women' },
  { key: 'youth', label: 'Youth' },
  { key: 'blackCommunities', label: 'Black Communities' },
  { key: 'personsWithDisabilities', label: 'Persons with Disabilities' },
  { key: 'visibleMinorities', label: 'Visible Minorities' },
  { key: 'twoSLGBTQIPlus', label: '2SLGBTQI+' },
  { key: 'linguisticMinorityCommunities', label: 'Linguistic Minority Communities' },
  { key: 'newcomersToCanada', label: 'Newcomers to Canada' },
  { key: 'indigenousPeoples', label: 'Indigenous Peoples' },
  { key: 'other', label: 'Other' },
] as const;

export const DemographicCompositionForm: React.FC<DemographicCompositionFormProps> = ({
  title,
  namePrefix,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const form = Form.useFormInstance();

  const calculateRemainingPercentage = (
    values: Partial<DemographicComposition>,
    excludeField?: keyof DemographicComposition
  ): number => {
    const sum = Object.entries(values)
      .filter(([key]) => key !== excludeField)
      .reduce((acc, [_, val]) => acc + (val || 0), 0);
    return Math.max(0, 100 - sum);
  };

  const handlePercentageChange = (field: keyof DemographicComposition) => {
    return (value: number | null) => {
      const values = form.getFieldValue(namePrefix) || {};
      const remaining = calculateRemainingPercentage(values, field);
      
      if ((value || 0) > remaining + (values[field] || 0)) {
        form.setFieldValue([...namePrefix, field], remaining + (values[field] || 0));
      }
    };
  };

  return (
    <div className="space-y-6">
      <GlowingText 
        className="text-lg font-medium"
        color={isDark ? darkTheme.colors.accent.primary : darkTheme.colors.accent.secondary}
      >
        {title}
      </GlowingText>

      <Space direction="vertical" className="w-full" size="large">
        {demographicFields.map(({ key, label }) => (
          <Form.Item
            key={key}
            name={[...namePrefix, key]}
            label={label}
            rules={[
              { required: true, message: `Please enter percentage for ${label}` },
              { type: 'number', min: 0, max: 100, message: 'Percentage must be between 0 and 100' },
            ]}
          >
            <InputNumber
              className="w-full"
              min={0}
              max={100}
              formatter={value => `${value}%`}
              parser={value => value!.replace('%', '')}
              onChange={handlePercentageChange(key as keyof DemographicComposition)}
            />
          </Form.Item>
        ))}
      </Space>
    </div>
  );
};