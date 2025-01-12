import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';

interface HeartsProps {
  currentHearts: number;
  maxHearts: number;
  nextRegenerationTime: Date | null;
}

const Hearts = ({ currentHearts, maxHearts, nextRegenerationTime }: HeartsProps) => {
  const getTimeRemaining = () => {
    if (!nextRegenerationTime) return null;
    const now = new Date();
    const diff = nextRegenerationTime.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { hours, minutes };
  };

  const timeRemaining = getTimeRemaining();

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex space-x-1">
        {[...Array(maxHearts)].map((_, index) => (
          <div key={index} className="relative">
            {index < currentHearts ? (
              <HeartSolid className="w-6 h-6 text-red-500" />
            ) : (
              <HeartOutline className="w-6 h-6 text-gray-400" />
            )}
          </div>
        ))}
      </div>
      {timeRemaining && currentHearts < maxHearts && (
        <div className="text-sm text-gray-600">
          Next heart in: {timeRemaining.hours}h {timeRemaining.minutes}m
        </div>
      )}
    </div>
  );
};

export default Hearts;