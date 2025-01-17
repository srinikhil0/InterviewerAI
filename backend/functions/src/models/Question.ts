import { Timestamp } from "firebase-admin/firestore";

export interface Question {
    id: string;
    interviewId: string;
    content: string;
    type: string;
    difficulty: "easy" | "medium" | "hard";
    expectedDuration: number;  
    response?: string;
    feedback?: QuestionFeedback;
    timestamp: Timestamp;
}

export interface QuestionFeedback {
    score: number;
    comments: string;
    suggestions: string[];
    timestamp: Timestamp;
}