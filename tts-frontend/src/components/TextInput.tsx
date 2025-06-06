import React from 'react';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function TextInput({ value, onChange }: Props) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={5}
      style={{ width: '100%', marginBottom: '1rem' }}
      placeholder="Enter text to convert to speech..."
    />
  );
}
