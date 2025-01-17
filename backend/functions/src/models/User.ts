import { Timestamp } from "firebase-admin/firestore";

export interface User {
    uid: string;
    email: string;
    displayName?: string;
    experienceLevel: "entry" | "mid" | "senior";
    interviewsCompleted: number;
    createdAt: Timestamp;
    lastActive: Timestamp;
}