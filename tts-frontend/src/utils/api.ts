const API_URL = 'https://your-api-id.execute-api.region.amazonaws.com/tts'; // replace this

export async function fetchSpeechAudio(
  text: string,
  voiceId: string,
  engine: string,
  speechRate?: string,
  pitch?: string
): Promise<string> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, voiceId, engine, speechRate, pitch }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Failed to generate speech');
  }

  const data = await response.json();
  return data.audioBase64;
}
