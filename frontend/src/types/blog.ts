export const industries = [
  'All',
  'Technology',
  'Healthcare',
  'Engineering',
  'Business',
  'Legal',
  'Finance',
  'Education'
] as const;

export type Industry = typeof industries[number];

export type UserRole = 'admin' | 'editor' | 'user'; 