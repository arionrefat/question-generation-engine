import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export interface cgptParams {
  message: string;
  completionParams?: {
    model: string;
    temperature: number;
  };
}


console.log(process.env.OPENAI_API_KEY)
async function cgptResponse(params: cgptParams): Promise<string> {
  const response = await axios({
    method: 'post',
    url: `https://api.openai.com/v1/chat/completions`,
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    data: {
      model: 'gpt-3.5-turbo' || params.completionParams?.model,
      temperature: 1 || params.completionParams?.temperature,
      messages: [
        {
          role: 'system',
          content:
            'You are a question-answer generating machine. You can only reply in HTML format',
        },
        {
          role: 'user',
          content: params.message,
        },
      ],
    },
  });

  return response.data.choices[0].message.content;
}

export default cgptResponse;
