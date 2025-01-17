import { createChatCompletion } from "../config/openai";
import { Question } from "../models/Question";
import { Interview } from "../models/Interview";

export class OpenAIService {
    // Generate interview questions based on type and experience level
    async generateQuestions(
        interviewType: Interview["type"],
        experienceLevel: string,
        count = 5
    ): Promise<Partial<Question>[]> {
        const prompt = `Generate ${count} ${interviewType} interview questions for ${experienceLevel} level software engineer. Format as JSON array.`;
        
        const response = await createChatCompletion([
            { role: "system", content: "You are an expert technical interviewer." },
            { role: "user", content: prompt }
        ]);

        if (!response.content) {
            throw new Error("Failed to generate questions");
        }

        return JSON.parse(response.content);
    }

    // Evaluate candidate's response
    async evaluateResponse(question: Question, response: string) {
        const prompt = `Evaluate this response to the question: "${question.content}". Response: "${response}"`;
        
        const evaluation = await createChatCompletion([
            { role: "system", content: "You are an expert at evaluating technical interviews." },
            { role: "user", content: prompt }
        ]);

        if (!evaluation.content) {
            throw new Error("Failed to evaluate response");
        }

        return {
            score: 0, // TODO: Parse score from evaluation
            comments: evaluation.content,
            suggestions: [],
            timestamp: new Date()
        };
    }
}

export const openaiService = new OpenAIService();