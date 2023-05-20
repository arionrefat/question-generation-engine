import axios from 'axios';
import dotenv from 'dotenv';
import { writeFileSync } from 'fs';
import { OpenAIApi, Configuration } from 'openai';

dotenv.config();

interface imageParams {
  message: string;
  n?: number;
  size?: string;
  responseformat?: 'url' | 'b64_json';
}

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

export async function imageResponse(params: imageParams): Promise<any> {
  const openai = new OpenAIApi(config);
  const response = await openai.createImage({
    prompt: params.message,
    n: 1 || params.n,
    size: '1024x1024' || params.size,
  });

  return response.data.data[0].url;
}

async function imgDownload(url: string, path?: string) {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const buffer = Buffer.from(response.data, 'binary');
  writeFileSync(`${path || '.'}/${Date.now()}.png`, buffer);
}

export default imgDownload;
