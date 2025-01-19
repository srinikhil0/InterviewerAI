import api from '../config/api';
import { Question, QuestionFeedback } from '../types/interview';

export const questionService = {
  // Get a specific question
  getQuestion: async (questionId: string) => {
    return api.get<Question>(`/questions/${questionId}`);
  },

  // Submit answer to a question
  submitAnswer: async (questionId: string, response: string) => {
    return api.post<Question>(`/questions/${questionId}/answer`, { response });
  },

  // Get feedback for a question
  getFeedback: async (questionId: string) => {
    return api.get<QuestionFeedback>(`/questions/${questionId}/feedback`);
  },

  // Request hint for a question
  getHint: async (questionId: string) => {
    return api.get<{ hint: string }>(`/questions/${questionId}/hint`);
  }
};

export default questionService; 