export const PLANS = {
    FREE: {
      type: 'FREE',
      features: {
        maxHearts: 5,
        hasAds: true,
        canRestartAnytime: false,
        regenerationTimeInHours: 6,
        features: [
          '5 Hearts',
          '6 Hours Heart Regeneration',
          'Full Interview Practice',
          'Resume Analysis',
          'Basic Performance Stats',
          'Community Support'
        ]
      }
    },
    PREMIUM: {
      type: 'PREMIUM',
      features: {
        maxHearts: Infinity,
        hasAds: false,
        canRestartAnytime: true,
        regenerationTimeInHours: 0,
        features: [
          'Unlimited Hearts',
          'No Regeneration Time',
          'Full Interview Practice',
          'Resume Analysis',
          'Advanced Performance Analytics',
          'Interview Recording & Playback',
          'Progress Tracking Dashboard',
          'Priority Support',
          'Ad-Free Experience'
        ]
      }
    }
  } as const;