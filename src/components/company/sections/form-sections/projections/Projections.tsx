import React from 'react';
import { Form } from 'antd';
import { ProjectionsForm } from './ProjectionsForm';
import { GrowthPlans } from './GrowthPlans';
import { SupportingDocuments } from './SupportingDocuments';
import { SciFiCard } from '../../../../common/SciFiCard';
import { GlowingText } from '../../../../common/GlowingText';
import { useProjections } from './hooks/useProjections';
import { darkTheme } from '../../../../../styles/themes/dark';

export const Projections: React.FC = () => {
  const form = Form.useFormInstance();
  const { summary } = useProjections(form);

  return (
    <div className="space-y-8">
      <GlowingText 
        className="text-xl font-semibold mb-4"
        color={darkTheme.colors.accent.primary}
      >
        {summary}
      </GlowingText>

      <SciFiCard className="p-6">
        <ProjectionsForm />
      </SciFiCard>

      <SciFiCard className="p-6">
        <GrowthPlans />
      </SciFiCard>

      <SciFiCard className="p-6">
        <SupportingDocuments />
      </SciFiCard>
    </div>
  );
};