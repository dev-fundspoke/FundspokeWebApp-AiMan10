import React from 'react';
import { DemographicCompositionForm } from './DemographicCompositionForm';
import { SciFiCard } from '../../../common/SciFiCard';
import { GlowingText } from '../../../common/GlowingText';
import { useThemeContext } from '../../../../context/ThemeContext';
import { darkTheme } from '../../../../styles/themes/dark';

export const Personnel: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <div className="space-y-8">
      <SciFiCard className="p-6">
        <div className="space-y-8">
          <GlowingText 
            className="text-xl font-semibold"
            color={isDark ? darkTheme.colors.accent.primary : darkTheme.colors.accent.secondary}
          >
            Personnel Demographics
          </GlowingText>

          <DemographicCompositionForm
            title="Ownership Composition"
            namePrefix={['personnel', 'ownership']}
          />

          <DemographicCompositionForm
            title="Management Composition"
            namePrefix={['personnel', 'management']}
          />
        </div>
      </SciFiCard>
    </div>
  );
};