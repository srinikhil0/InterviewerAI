import api from '../config/api';
import { Interview, InterviewFeedback, Question } from '../types/interview';

export const interviewService = {
  // Create a new interview
  createInterview: async (userId: string, type: string, experienceLevel: string) => {
    return api.post<{ id: string }>('/interviews', { userId, type, experienceLevel });
  },

  // Start an interview
  startInterview: async (interviewId: string) => {
    return api.put<Interview>(`/interviews/${interviewId}/start`);
  },

  // End an interview with feedback
  endInterview: async (interviewId: string, feedback: InterviewFeedback) => {
    return api.put<Interview>(`/interviews/${interviewId}/end`, { feedback });
  },

  // Get interview by ID
  getInterview: async (interviewId: string) => {
    return api.get<Interview>(`/interviews/${interviewId}`);
  },

  // Get interview questions
  getInterviewQuestions: async (interviewId: string) => {
    return api.get<Question[]>(`/interviews/${interviewId}/questions`);
  }
};

export default interviewService;
