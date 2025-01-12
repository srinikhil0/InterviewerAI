import { useState, useEffect } from 'react';
import { PLANS } from '../config/plans';

export const useHearts = (userPlan: 'FREE' | 'PREMIUM') => {
  const plan = PLANS[userPlan];
  const [hearts, setHearts] = useState({
    current: plan.features.maxHearts,
    nextRegeneration: null as Date | null,
  });

  const loseHeart = () => {
    if (userPlan === 'PREMIUM') return; // Premium users don't lose hearts

    setHearts(prev => {
      if (prev.current <= 0) return prev;
      
      const newHearts = prev.current - 1;
      const nextRegenTime = new Date();
      nextRegenTime.setHours(nextRegenTime.getHours() + plan.features.regenerationTimeInHours);

      return {
        current: newHearts,
        nextRegeneration: nextRegenTime,
      };
    });
  };

  useEffect(() => {
    if (userPlan === 'PREMIUM') return;
    
    const interval = setInterval(() => {
      setHearts(prev => {
        if (prev.current >= plan.features.maxHearts) return prev;
        if (!prev.nextRegeneration) return prev;

        const now = new Date();
        if (now >= prev.nextRegeneration) {
          const newHearts = prev.current + 1;
          const nextRegenTime = newHearts < plan.features.maxHearts
            ? new Date(now.getTime() + plan.features.regenerationTimeInHours * 60 * 60 * 1000)
            : null;

          return {
            current: newHearts,
            nextRegeneration: nextRegenTime,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [
    userPlan, 
    plan.features.maxHearts, 
    plan.features.regenerationTimeInHours
  ]);

  return {
    hearts: hearts.current,
    maxHearts: plan.features.maxHearts,
    nextRegenerationTime: hearts.nextRegeneration,
    loseHeart,
  };
};