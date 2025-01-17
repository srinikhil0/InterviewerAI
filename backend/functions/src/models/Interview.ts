import { Timestamp } from "firebase-admin/firestore";

export interface Interview {
    id: string;
    userId: string;
    type: "dsa" | "system_design" | "behavioral";
    status: "scheduled" | "in_progress" | "completed";
    startTime: Timestamp;
    endTime?: Timestamp;
    experienceLevel: string;
    questions: string[];
    resumeUrl?: string;
    feedback?: InterviewFeedback;
}

export interface InterviewFeedback {
    id: string;
    interviewId: string;
    technicalScore: number;
    communicationScore: number;
    problemSolvingScore: number;
    duration: number;
    strengths: string[];
    improvements: string[];
    detailedFeedback: string;
    timestamp: Timestamp;
}