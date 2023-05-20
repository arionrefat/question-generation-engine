import cgptResponse from './cgpt';

async function cgptResponseObject(message: string): Promise<any> {
  for (let i = 0; i < 2; i++) {
    try {
      const res = await cgptResponse({ message });
      return JSON.parse(res);
    } catch (error) {
      console.log(`Attempt ${i+1}: Couldn't parse the JSON object. Error:`, error);
      if (i == 1) {
        throw new Error("Failed to parse JSON response after 2 attempts");
      }
    }
  }
}

export default cgptResponseObject;
