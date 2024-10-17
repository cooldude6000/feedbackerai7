import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { db } from "@/db";
import { feedbacks } from "@/db/schema";
import { eq } from "drizzle-orm";

const googleApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(googleApiKey);

export async function POST(req: Request) {
    try {
        const { projectId } = await req.json();

        const feedbackResults = await db
            .select({ message: feedbacks.message })
            .from(feedbacks)
            .where(eq(feedbacks.projectId, parseInt(projectId)));

        if (!feedbackResults.length) {
            return NextResponse.json({ error: 'No feedback found for this project' }, { status: 404 });
        }

        const feedbackMessages = feedbackResults.map(feedback => feedback.message);
        const concatenatedMessages = feedbackMessages.join('; ');

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

       
        const prompt = `Below is a set of user reviews about my product, concatenated into a single paragraph. Each individual review is seperated by a ";" - so that you can seperate and identify reviews. So, now - please analyze the reviews and provide a detailed response in three paragraphs, adhering strictly to the following structure: What People Liked: Clearly list and describe all the features or aspects of the product that users liked. Provide the number of users who mentioned each feature (e.g., "X users liked this feature"). What People Didn't Like: Summarize the features or aspects that users didn’t like or had issues with. Include any specific feature requests or changes that users suggested. Actionable Insights: Offer a strategic plan for the product owner on how to improve the product based on the reviews. Recommend which features should be prioritized for improvement or development, and include the order in which changes should be made for maximum benefit to users and the product's success based on like which feature was asked more. The higher a feature is requested by users , the higher in the priority list it should be. If a feature is equally asked by the same amount of people, then order the features in a manner of which is more useful to the product. Clearly mention how manu users asked for that feature while you mention it. Formatting Instructions: Do not use any symbols like asterisks (*) or bold formatting (**). Structure the response to be well-formatted, readable, and use proper paragraph breaks. Finally, ignore spam reviews and give a sensible, intelligent response based solely on the given reviews. If there are very few reviews, just give repsponse based on that limited data and say - there is only limited data. but pls dont creat your own responses. just respond based on what the reviews are. ignore spam reviews like : "test", "hi", etc type of spam ones. These are the reviews: ${concatenatedMessages}`;

        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const summary = response.text();

        return NextResponse.json({ summary });
    } catch (error) {
        console.error('Summarization error:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}