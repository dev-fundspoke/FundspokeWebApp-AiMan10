import React from 'react';
import { DetailedDescription } from './DetailedDescription';
import { SupportingDocuments } from './SupportingDocuments';
import { SciFiCard } from '../../../../common/SciFiCard';

export const TechnologyDescription: React.FC = () => {
  return (
    <div className="space-y-8">
      <SciFiCard className="p-6">
        <DetailedDescription />
      </SciFiCard>
      
      <SciFiCard className="p-6">
        <SupportingDocuments />
      </SciFiCard>
    </div>
  );
};