import { db } from "../config/firebase";
import { Interview, InterviewFeedback } from "../models/Interview";
import { Question } from "../models/Question";
import { openaiService } from "./openaiService";
import { Timestamp } from "firebase-admin/firestore";

export class InterviewService {
    async createInterview(userId: string, type: Interview["type"], experienceLevel: string): Promise<string> {
        // Generate initial questions
        const questions = await openaiService.generateQuestions(type, experienceLevel);
        
        // Create question documents
        const questionRefs = await Promise.all(
            questions.map(async (q) => {
                const questionDoc = await db.collection("questions").add({
                    ...q,
                    interviewId: "", // Will update after interview creation
                    timestamp: Timestamp.now()
                });
                return questionDoc.id;
            })
        );

        const interview: Omit<Interview, "id"> = {
            userId,
            type,
            status: "scheduled",
            startTime: Timestamp.now(),
            experienceLevel,
            questions: questionRefs,
        };

        // Create interview and update question references
        const docRef = await db.collection("interviews").add(interview);
        
        // Update questions with interview ID
        await Promise.all(
            questionRefs.map(async (qId) => {
                await db.collection("questions").doc(qId).update({
                    interviewId: docRef.id
                });
            })
        );

        return docRef.id;
    }

    async startInterview(interviewId: string) {
        await db.collection("interviews").doc(interviewId).update({
            status: "in_progress",
            startTime: Timestamp.now()
        });
    }

    async endInterview(interviewId: string, feedback: InterviewFeedback) {
        await db.collection("interviews").doc(interviewId).update({
            status: "completed",
            endTime: Timestamp.now(),
            feedback
        });
    }

    async getInterview(interviewId: string): Promise<Interview> {
        const doc = await db.collection("interviews").doc(interviewId).get();
        return doc.data() as Interview;
    }

    async getInterviewQuestions(interviewId: string): Promise<Question[]> {
        const interview = await this.getInterview(interviewId);
        const questions = await Promise.all(
            interview.questions.map(async (qId) => {
                const doc = await db.collection("questions").doc(qId).get();
                return doc.data() as Question;
            })
        );
        return questions;
    }
}

export const interviewService = new InterviewService();