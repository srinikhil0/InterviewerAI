import { Request, Response } from "express";
import { openaiService } from "../services/openaiService";
import { db } from "../config/firebase";
import { Timestamp } from "firebase-admin/firestore";
import { Question } from "../models/Question";

export class QuestionController {
    async generateQuestions(req: Request, res: Response) {
        try {
            const { interviewType, experienceLevel, count } = req.body;
            
            const questions = await openaiService.generateQuestions(
                interviewType,
                experienceLevel,
                count
            );

            return res.json({ questions });
        } catch (error) {
            return res.status(500).json({ error: "Failed to generate questions" });
        }
    }

    async getQuestion(req: Request, res: Response) {
        try {
            const { questionId } = req.params;
            const questionDoc = await db.collection("questions").doc(questionId).get();

            if (!questionDoc.exists) {
                return res.status(404).json({ error: "Question not found" });
            }

            return res.json(questionDoc.data());
        } catch (error) {
            return res.status(500).json({ error: "Failed to fetch question" });
        }
    }

    async updateQuestion(req: Request, res: Response) {
        try {
            const { questionId } = req.params;
            const { response, feedback } = req.body;

            await db.collection("questions").doc(questionId).update({
                response,
                feedback,
                updatedAt: Timestamp.now()
            });

            return res.json({ message: "Question updated successfully" });
        } catch (error) {
            return res.status(500).json({ error: "Failed to update question" });
        }
    }

    async getQuestionsByInterview(req: Request, res: Response) {
        try {
            const { interviewId } = req.params;
            const questionsSnapshot = await db
                .collection("questions")
                .where("interviewId", "==", interviewId)
                .orderBy("timestamp", "asc")
                .get();

            const questions = questionsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return res.json({ questions });
        } catch (error) {
            return res.status(500).json({ error: "Failed to fetch questions" });
        }
    }

    async evaluateResponse(req: Request, res: Response) {
        try {
            const { questionId } = req.params;
            const { response } = req.body;

            const questionDoc = await db.collection("questions").doc(questionId).get();
            if (!questionDoc.exists) {
                return res.status(404).json({ error: "Question not found" });
            }

            const question = questionDoc.data() as Question;
            if (!question) {
                return res.status(404).json({ error: "Question data is invalid" });
            }

            const feedback = await openaiService.evaluateResponse(question, response);

            // Update question with response and feedback
            await db.collection("questions").doc(questionId).update({
                response,
                feedback,
                evaluatedAt: Timestamp.now()
            });

            return res.json({ feedback });
        } catch (error) {
            return res.status(500).json({ error: "Failed to evaluate response" });
        }
    }
}

export const questionController = new QuestionController();
