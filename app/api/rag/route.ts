import { Pinecone } from '@pinecone-database/pinecone'


const API_KEY = 'pcsk_3CS6nF_KwcT7rt8xMkE2urdEj4JyzijnsTHinr53QfmEJYNabn3x72bYT8xh9RcoUkZAEn'
// Basic setup for Pinecone
const pc = new Pinecone({ apiKey: API_KEY});
const assistantName = 'about-ivan';
const assistant = pc.Assistant(assistantName);



// P I N E C O N E
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt }: { prompt: string } = body;
    if (!prompt) {
      console.error('No prompt provided in request');
      return Response.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }


    if (!API_KEY) {
      console.error('PINECONE_API_KEY is not set in environment variables');
      return Response.json(
        { error: 'Pinecone key is not configured' },
        { status: 500 }
      );
    }

    try {
      const chatResp = await assistant.chat({
        messages: [{ role: 'user', content: prompt }],
      });
 
      const contentText = chatResp?.message?.content || "";
      // clean text
      // const finishedText = JSON.parse(cleanText)
      console.log(typeof contentText + "     <<< >>>>")
      return Response.json({ response: contentText || "wrong data" });
    } catch (openaiError) {
      console.error('Pinecone API error:', {
        error: openaiError,
        message: openaiError instanceof Error ? openaiError.message : 'Unknown API error',
        stack: openaiError instanceof Error ? openaiError.stack : undefined
      });
      return Response.json(
        { error: 'Failed to generate response from Pinecone' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Detailed error in chat API:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}