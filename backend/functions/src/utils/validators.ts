import { Request, Response, NextFunction } from "express";
import { z } from "zod";

// Define types for validation schemas
export type UserInput = z.infer<typeof userSchema>;
export type InterviewInput = z.infer<typeof interviewSchema>;
export type QuestionResponseInput = z.infer<typeof questionResponseSchema>;

// User validation schemas
const userSchema = z.object({
    email: z.string().email(),
    displayName: z.string().min(2),
    experienceLevel: z.enum(["entry", "mid", "senior"])
});

// Interview validation schemas
const interviewSchema = z.object({
    userId: z.string(),
    type: z.enum(["dsa", "system_design", "behavioral"]),
    experienceLevel: z.string()
});

// Question validation schemas
const questionResponseSchema = z.object({
    response: z.string().min(1)
});

// Validation middleware factory
const validateRequest = (schema: z.ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).json({
                    error: "Validation failed",
                    details: error.errors
                });
            } else {
                next(error);
            }
        }
    };
};

export {
    validateRequest,
    userSchema,
    interviewSchema,
    questionResponseSchema
};
