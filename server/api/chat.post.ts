import { GoogleGenerativeAI } from '@google/generative-ai';

export default defineEventHandler(async (event) => {
    // Check method
    if (event.node.req.method !== 'POST') {
        throw createError({
            statusCode: 405,
            statusMessage: 'Method Not Allowed',
        });
    }

    try {
        const body = await readBody(event);
        const { message, history } = body;

        const config = useRuntimeConfig();

        if (!config.geminiApiKey) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Gemini API key is not configured.',
            });
        }

        const genAI = new GoogleGenerativeAI(config.geminiApiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        const systemInstruction = `You are a helpful, professional, and friendly AI assistant on Mostefa Boudjema's web developer portfolio website. You help visitors navigate the site, answer questions about Mostefa's background (Laravel and Vue.js developer, based in Algeria), and provide assistance regarding his projects and CV. Keep your responses concise and well-formatted in markdown.`;

        const chat = model.startChat({
            history: history || [],
            generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7,
            },
        });

        // System prompt simulation by adding it as an initial context if missing, or using instructions (varies by Gemini API version, simpler is injecting it if needed. For 1.5 we can just pass it directly if we wanted, but prepending it to the message or handling systemInstructions natively is best).
        const promptMessage = history && history.length > 0 ? message : `${systemInstruction}\n\nUser message: ${message}`;

        const result = await chat.sendMessage(promptMessage);
        const response = await result.response;
        const text = response.text();

        return {
            reply: text,
        };

    } catch (error) {
        console.error('Gemini API Error:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to process chat request.',
        });
    }
});
