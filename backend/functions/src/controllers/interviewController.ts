import { Request, Response } from "express";
import { interviewService } from "../services/interviewService";
import { openaiService } from "../services/openaiService";
import { avatarService } from "../services/avatarService";

export class InterviewController {
    async createInterview(req: Request, res: Response) {
        try {
            const { userId, type, experienceLevel } = req.body;
            
            // Create interview session
            const interviewId = await interviewService.createInterview(
                userId,
                type,
                experienceLevel
            );

            // Initialize avatar
            const avatarConfig = await avatarService.initializeAvatar(type);

            return res.status(201).json({
                interviewId,
                avatarConfig
            });
        } catch (error) {
            return res.status(500).json({ error: "Failed to create interview" });
        }
    }

    async startInterview(req: Request, res: Response) {
        try {
            const { interviewId } = req.params;
            await interviewService.startInterview(interviewId);
            
            // Get first set of questions
            const questions = await interviewService.getInterviewQuestions(interviewId);

            return res.json({
                status: "started",
                questions
            });
        } catch (error) {
            return res.status(500).json({ error: "Failed to start interview" });
        }
    }

    async submitResponse(req: Request, res: Response) {
        try {
            const { interviewId, questionId } = req.params;
            const { response } = req.body;

            // Get the current question
            const questions = await interviewService.getInterviewQuestions(interviewId);
            const currentQuestion = questions.find(q => q.id === questionId);

            if (!currentQuestion) {
                return res.status(404).json({ error: "Question not found" });
            }

            // Evaluate response
            const feedback = await openaiService.evaluateResponse(currentQuestion, response);

            return res.json({
                feedback,
                nextQuestion: questions[questions.indexOf(currentQuestion) + 1]
            });
        } catch (error) {
            return res.status(500).json({ error: "Failed to process response" });
        }
    }

    async endInterview(req: Request, res: Response) {
        try {
            const { interviewId } = req.params;
            const { feedback } = req.body;

            await interviewService.endInterview(interviewId, feedback);

            return res.json({
                status: "completed",
                feedback
            });
        } catch (error) {
            return res.status(500).json({ error: "Failed to end interview" });
        }
    }

    async getInterview(req: Request, res: Response) {
        try {
            const { interviewId } = req.params;
            const interview = await interviewService.getInterview(interviewId);

            if (!interview) {
                return res.status(404).json({ error: "Interview not found" });
            }

            return res.json(interview);
        } catch (error) {
            return res.status(500).json({ error: "Failed to fetch interview" });
        }
    }
}

export const interviewController = new InterviewController();
