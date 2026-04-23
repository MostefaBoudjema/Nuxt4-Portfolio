import { GoogleGenerativeAI } from '@google/generative-ai';
import getProjects from '@/data/projects.js';
import EmploymentHistory from '@/data/EmploymentHistory.js';
import Education from '@/data/Education.js';
import { socialLinks } from '@/data/socialLinks.js';
import clients from '@/data/clients.js';
import testimonials from '@/data/testimonials.js';
import posts from '@/data/posts.js';

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

        const contextData = {
            projects: getProjects().map((p: any) => ({ 
                title: p.title, 
                category: p.category, 
                technologies: p.projectInfo?.technologies?.[0]?.techs 
            })),
            employment: EmploymentHistory,
            education: Education,
            socialLinks: socialLinks,
            clients: clients.map((c: any) => c.title),
            testimonials: testimonials.map((t: any) => ({ name: t.name, role: t.role, quote: t.quote })),
            blogPosts: posts.map((p: any) => ({ title: p.title, summary: p.summary, tags: p.tags }))
        };

        const systemInstruction = `You are a helpful, professional, and friendly AI assistant on Mostefa Boudjema's web developer portfolio website. You help visitors navigate the site, answer questions about Mostefa's background (Laravel and Vue.js developer, based in Algeria), and provide assistance regarding his projects and CV. Keep your responses concise and well-formatted in markdown. 
        
        Here is the relevant context data about Mostefa to use in your responses:
        ${JSON.stringify(contextData)}`;

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

    } catch (error: any) {
        console.error('Gemini API Error:', error);
        throw createError({
            statusCode: 500,
            statusMessage: error?.message || 'Failed to process chat request.',
            data: error
        });
    }
});
