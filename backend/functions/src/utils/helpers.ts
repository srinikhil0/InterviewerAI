import { Response } from "express";
import { Timestamp } from "firebase-admin/firestore";
import { Question } from "../models/Question";
import { InterviewFeedback } from "../models/Interview";

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

// Response helper functions
export const sendSuccess = <T>(res: Response, data: T, status = 200) => {
    return res.status(status).json({
        success: true,
        data
    } as ApiResponse<T>);
};

export const sendError = (res: Response, message: string, status = 500) => {
    return res.status(status).json({
        success: false,
        error: message
    } as ApiResponse<never>);
};

// Time helpers
export const timestampToDate = (timestamp: Timestamp): Date => {
    return timestamp.toDate();
};

export const dateToTimestamp = (date: Date): Timestamp => {
    return Timestamp.fromDate(date);
};

// Interview helpers
export const calculateInterviewDuration = (startTime: Timestamp, endTime: Timestamp): number => {
    const start = startTime.toDate();
    const end = endTime.toDate();
    return Math.floor((end.getTime() - start.getTime()) / 1000 / 60); // Duration in minutes
};

interface InterviewSummary {
    totalQuestions: number;
    answeredQuestions: number;
    averageScore: number;
    duration: number;
    strengths: string[];
    improvements: string[];
}

export const generateInterviewSummary = (
    questions: Question[],
    feedback: InterviewFeedback
): InterviewSummary => {
    return {
        totalQuestions: questions.length,
        answeredQuestions: questions.filter(q => q.response).length,
        averageScore: feedback.technicalScore,
        duration: feedback.duration,
        strengths: feedback.strengths,
        improvements: feedback.improvements
    };
};

// Error handling helpers
interface FirebaseError {
    code: string;
    message: string;
}

export const handleFirebaseError = (error: FirebaseError): string => {
    console.error("Firebase Error:", error);
    if (error.code === "not-found") {
        return "Resource not found";
    }
    if (error.code === "permission-denied") {
        return "Permission denied";
    }
    return "An unexpected error occurred";
};

// Validation helpers
export const isValidUUID = (uuid: string): boolean => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
};
