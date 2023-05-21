import { YoutubeTranscript } from 'youtube-transcript-axios';

interface TranscriptData {
  text: string;
  duration: number;
  offset: number;
}

function concatenateYoutubeTranscription(data: TranscriptData[]): string {
  return data.reduce((acc, curr) => acc + curr.text + ' ', '');
}

export default async function fetchTranscripts(url: string) {
  const transcriptionData = await YoutubeTranscript.fetchTranscript(url);
  return concatenateYoutubeTranscription(transcriptionData);
}
