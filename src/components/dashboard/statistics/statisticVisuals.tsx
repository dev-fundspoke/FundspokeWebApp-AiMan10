// Remove unused React import since we're not using JSX
import { Progress, Badge } from 'antd';

const gradientColors = {
  start: '#008080',
  end: '#A3E635'
} as const;

export const renderProgressBar = (progress: number) => (
  <Progress
    percent={progress}
    strokeColor={{
      '0%': gradientColors.start,
      '100%': gradientColors.end
    }}
    size={{ height: 8 }}
    className="mt-4"
  />
);

export const renderCircleProgress = (progress: number) => (
  <Progress
    type="circle"
    percent={progress}
    strokeColor={{
      '0%': gradientColors.start,
      '100%': gradientColors.end
    }}
    size={120}
  />
);

export const renderBadges = () => (
  <div className="flex flex-wrap justify-center gap-3 mt-4">
    <Badge color={gradientColors.start} text="Approved" count={3} className="flex items-center" />
    <Badge color={gradientColors.end} text="Submitted" count={7} className="flex items-center" />
    <Badge color="#9CA3AF" text="Pending" count={4} className="flex items-center" />
  </div>
);

export const renderNotification = (value: number) => (
  <div className="bg-gray-100 text-gray-700 rounded-full px-6 py-2 text-sm font-medium inline-block mt-4">
    {value} pending actions
  </div>
);