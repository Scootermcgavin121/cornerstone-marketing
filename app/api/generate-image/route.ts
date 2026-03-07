import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt, filename } = await req.json();

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `${prompt}`,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    return Response.json({
      success: true,
      images: response.data.map(image => ({
        url: image.url,
        filename: filename || 'generated-image.png'
      }))
    });

  } catch (error) {
    console.error('Image generation error:', error);
    return Response.json(
      { success: false, error: error.message || 'Failed to generate image' },
      { status: 500 }
    );
  }
}