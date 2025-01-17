import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set in environment variables");
}

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Helper function for chat completion
async function createChatCompletion(
    messages: Array<{ role: "system" | "user" | "assistant", content: string }>,
    options: {
        temperature?: number;
        max_tokens?: number;
        model?: string;
    } = {}
) {
    const defaultOptions = {
        temperature: 0.7,
        max_tokens: 500,
        model: "gpt-4-1106-preview"  // Using the latest GPT-4 model
    };

    const completion = await openai.chat.completions.create({
        ...defaultOptions,
        ...options,
        messages,
    });

    return completion.choices[0].message;
}

export {
    openai,
    createChatCompletion
};