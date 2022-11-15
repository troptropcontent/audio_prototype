import { useState } from "react";
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
  