import React from 'react';
import { Progress, Tooltip } from 'antd';
import { deadlineStatusConfig } from '../../../config/deadlineConfig';
import type { DeadlineStatus } from '../../../types/deadline';

interface DeadlineProgressProps {
  status: DeadlineStatus;
  progress: number;
  daysUntil: number;
}

export const DeadlineProgress: React.FC<DeadlineProgressProps> = ({
  status,
  progress,
  daysUntil,
}) => {
  const config = deadlineStatusConfig[status];

  return (
    <Tooltip 
      title={`${Math.abs(daysUntil)} days ${daysUntil >= 0 ? 'remaining' : 'overdue'}`}
    >
      <div className="w-32">
        <Progress
          percent={progress}
          size={{ width: 128, height: 6 }}
          strokeColor={{
            '0%': config.color,
            '100%': config.color,
          }}
          trailColor="rgba(255, 255, 255, 0.1)"
          style={{
            filter: `drop-shadow(${config.glow})`,
          }}
          className="deadline-progress"
        />
      </div>
    </Tooltip>
  );
};