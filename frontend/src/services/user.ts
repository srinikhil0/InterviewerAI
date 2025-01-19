import api from '../config/api';
import { User } from '../types/user';

export const userService = {
  // Get user profile
  getProfile: async (userId: string) => {
    return api.get<User>(`/users/${userId}`);
  },

  // Update user profile
  updateProfile: async (userId: string, data: Partial<User>) => {
    return api.put<User>(`/users/${userId}`, data);
  },

  // Update experience level
  updateExperienceLevel: async (userId: string, experienceLevel: string) => {
    return api.put<User>(`/users/${userId}/experience`, { experienceLevel });
  },

  // Upload resume
  uploadResume: async (userId: string, file: File) => {
    const formData = new FormData();
    formData.append('resume', file);
    return api.post<{ resumeUrl: string }>(`/users/${userId}/resume`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
};

export default userService; 