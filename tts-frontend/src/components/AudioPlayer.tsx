import React from 'react';

interface Props {
  src: string;
}

export default function AudioPlayer({ src }: Props) {
  return (
    src ? <audio controls src={src} style={{ marginTop: '1rem' }} /> : null
  );
}
