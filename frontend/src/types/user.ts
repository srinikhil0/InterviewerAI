export interface User {
    uid: string;
    email: string;
    displayName?: string;
    experienceLevel: "entry" | "mid" | "senior";
    interviewsCompleted: number;
    createdAt: string;
    lastActive: string;
    resumeUrl?: string;
}

export interface UserProfile extends Omit<User, 'uid'> {
    id: string;  // Using id instead of uid for consistency with other models
}
