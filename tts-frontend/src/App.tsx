import React, { useState } from 'react';
import TextInput from './components/TextInput';
import VoiceSelector from './components/VoiceSelector';
import SpeechControls from './components/SpeechControls';
import AudioPlayer from './components/AudioPlayer';
import { fetchSpeechAudio } from './utils/api';

function App() {
  const [text, setText] = useState('');
  const [voiceId, setVoiceId] = useState('Joanna');
  const [engine, setEngine] = useState('standard');
  const [rate, setRate] = useState('100%');
  const [pitch, setPitch] = useState('0');
  const [audioSrc, setAudioSrc] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const audio = await fetchSpeechAudio(text, voiceId, engine, rate, pitch);
      setAudioSrc(`data:audio/mp3;base64,${audio}`);
    } catch (e) {
      alert('Error generating speech');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Text to Speech</h1>
      <TextInput value={text} onChange={setText} />
      <VoiceSelector value={voiceId} onChange={setVoiceId} />
      <SpeechControls rate={rate} pitch={pitch} engine={engine}
                      onRateChange={setRate} onPitchChange={setPitch} onEngineChange={setEngine} />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Speech'}
      </button>
      <AudioPlayer src={audioSrc} />
    </div>
  );
}

export default App;
