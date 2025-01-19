export interface Interview {
    id: string;
    userId: string;
    type: "dsa" | "system_design" | "behavioral";
    status: "scheduled" | "in_progress" | "completed";
    startTime: string;
    endTime?: string;
    experienceLevel: string;
    questions: string[];
    resumeUrl?: string;
    feedback?: InterviewFeedback;
}

export interface InterviewFeedback {
    id: string;
    interviewId: string;
    technicalScore: number;
    communicationScore: number;
    problemSolvingScore: number;
    duration: number;
    strengths: string[];
    improvements: string[];
    detailedFeedback: string;
    timestamp: string;
}

export interface Question {
    id: string;
    interviewId: string;
    content: string;
    type: string;
    difficulty: "easy" | "medium" | "hard";
    expectedDuration: number;
    response?: string;
    feedback?: QuestionFeedback;
    timestamp: string;
}

export interface QuestionFeedback {
    score: number;
    comments: string;
    suggestions: string[];
    timestamp: string;
}
