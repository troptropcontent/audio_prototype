import { useState, useEffect } from 'react';

export function VolumeChecker({stream}) {
    const [volume, setVolume] = useState(0)
    
    useEffect(() => {
        const audioContext = new AudioContext();
        const analyser = new AnalyserNode(audioContext)
        const microphone = audioContext.createMediaStreamSource(stream);
        const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
    
        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;
    
        microphone.connect(analyser);
        analyser.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);
        scriptProcessor.onaudioprocess = function() {
          const array = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(array);
          const arraySum = array.reduce((a, value) => a + value, 0);
          const average = arraySum / array.length;
          setVolume(Math.round(average));
          // colorPids(average);
        };
    }, [stream]);


    const percentage = volume + '%';
    return (
        <div className="flex h-2 bg-slate-200">
            <div className="bg-black" style={{width: percentage}}></div>
        </div>
    )
};
  