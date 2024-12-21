import React from 'react';
import { HolographicCard } from '../../common/HolographicCard';
import { GlowingText } from '../../common/GlowingText';
import { FuturisticTimeline } from './FuturisticTimeline';
import { useThemeContext } from '../../../context/ThemeContext';

export const ActivitySection: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <section className={`py-8 ${isDark ? 'bg-dark-bg' : 'bg-neutral-50'} rounded-2xl`}>
      <div className="px-6">
        <GlowingText className="text-2xl font-display font-semibold mb-6">
          Recent Activity
        </GlowingText>
        <HolographicCard
          className="activity-card"
          glowIntensity="low"
          variant="secondary"
        >
          <FuturisticTimeline />
        </HolographicCard>
      </div>
    </section>
  );
};