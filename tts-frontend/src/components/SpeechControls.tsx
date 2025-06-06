import React from 'react';

interface Props {
  rate: string;
  pitch: string;
  engine: string;
  onRateChange: (val: string) => void;
  onPitchChange: (val: string) => void;
  onEngineChange: (val: string) => void;
}

export default function SpeechControls({
  rate, pitch, engine, onRateChange, onPitchChange, onEngineChange
}: Props) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>Rate:</label>
      <input type="text" value={rate} onChange={(e) => onRateChange(e.target.value)} />
      <label style={{ marginLeft: '1rem' }}>Pitch:</label>
      <input type="text" value={pitch} onChange={(e) => onPitchChange(e.target.value)} />
      <div>
        <label>Engine:</label>
        <select value={engine} onChange={(e) => onEngineChange(e.target.value)}>
          <option value="standard">Standard</option>
          <option value="neural">Neural</option>
        </select>
      </div>
    </div>
  );
}
