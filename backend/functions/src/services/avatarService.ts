interface AvatarConfig {
    model: string;
    expression: string;
    voice: string;
    interviewType?: string;
    rpmUrl?: string;  // Ready Player Me avatar URL
}

export class AvatarService {
    private readonly subdomain: string;
    private readonly apiKey: string;
    
    constructor() {
        this.subdomain = process.env.RPM_SUBDOMAIN || "";
        this.apiKey = process.env.RPM_API_KEY || "";
        
        if (!this.subdomain || !this.apiKey) {
            console.warn("Ready Player Me credentials not found in environment variables");
        }
    }

    private avatarConfig: AvatarConfig = {
        model: "default",
        expression: "neutral",
        voice: "en-US-Standard-A"
    };

    async initializeAvatar(interviewType: string): Promise<AvatarConfig> {
        // Use interviewType to customize avatar settings
        this.avatarConfig = {
            ...this.avatarConfig,
            interviewType,
            model: this.getModelForInterviewType(interviewType),
            rpmUrl: `https://${this.subdomain}.readyplayer.me/avatar`
        };
        
        return this.avatarConfig;
    }

    async updateExpression(emotion: string): Promise<boolean> {
        try {
            // Update the avatar's expression based on emotion
            this.avatarConfig.expression = this.validateEmotion(emotion);
            return true;
        } catch (error) {
            console.error("Failed to update avatar expression:", error);
            return false;
        }
    }

    private getModelForInterviewType(interviewType: string): string {
        // Map interview types to specific avatar models
        const modelMap: Record<string, string> = {
            "dsa": "technical-interviewer",
            "system_design": "architect-interviewer",
            "behavioral": "hr-interviewer",
            "default": "default-interviewer"
        };

        return modelMap[interviewType] || modelMap.default;
    }

    private validateEmotion(emotion: string): string {
        // List of supported emotions
        const validEmotions = [
            "neutral", "happy", "serious", "thoughtful",
            "encouraging", "concerned", "impressed"
        ];

        if (!validEmotions.includes(emotion)) {
            return "neutral"; // Default fallback
        }

        return emotion;
    }
}

export const avatarService = new AvatarService();