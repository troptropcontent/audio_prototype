import { useState } from "react";
export function StopRecordingButton({onClick}) {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center w-32 h-32 bg-slate-50 rounded-full">
        <button className="w-12 h-12 bg-slate-200 rounded-md" onClick={onClick}></button>
      </div>
    </div>
  );
};
  