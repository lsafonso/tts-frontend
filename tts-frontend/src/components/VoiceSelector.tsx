import React from 'react';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function VoiceSelector({ value, onChange }: Props) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} style={{ marginBottom: '1rem' }}>
      <option value="Joanna">Joanna (US)</option>
      <option value="Matthew">Matthew (US)</option>
      <option value="Amy">Amy (UK)</option>
      <option value="Brian">Brian (UK)</option>
    </select>
  );
}
