import { Router } from "express";
import { userController } from "../controllers/userController";
import { interviewController } from "../controllers/interviewController";
import { questionController } from "../controllers/questionController";

const router = Router();

// User routes
router.post("/users", userController.createUser);
router.get("/users/:userId", userController.getUser);

// Interview routes
router.post("/interviews", interviewController.createInterview);
router.get("/interviews/:interviewId", interviewController.getInterview);
router.post("/interviews/:interviewId/start", interviewController.startInterview);
router.post("/interviews/:interviewId/end", interviewController.endInterview);
router.post("/interviews/:interviewId/questions/:questionId/response", interviewController.submitResponse);

// Question routes
router.post("/questions/generate", questionController.generateQuestions);
router.get("/questions/:questionId", questionController.getQuestion);
router.put("/questions/:questionId", questionController.updateQuestion);
router.get("/interviews/:interviewId/questions", questionController.getQuestionsByInterview);
router.post("/questions/:questionId/evaluate", questionController.evaluateResponse);

export default router; 