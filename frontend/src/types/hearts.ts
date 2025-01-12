export interface HeartSystem {
    maxHearts: number;
    currentHearts: number;
    lastHeartLoss: Date | null;
    nextHeartRegenerationTime: Date | null;
    regenerationTimeInHours: number;
  }
  
  export interface UserPlan {
    type: 'FREE' | 'PREMIUM';
    features: {
      maxHearts: number;
      hasAds: boolean;
      canRestartAnytime: boolean;
      regenerationTimeInHours: number;
    };
  }