import { useState } from "react";
import ReactAudioPlayer from 'react-audio-player';

export function AudioPlayer({src}) {
  return (
    <div className="flex flex-col gap-4">
        <audio
        controls
        src={src}>
          Boom
        </audio>
    </div>  
  );
};
  