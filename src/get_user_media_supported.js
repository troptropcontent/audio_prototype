import { useState, useEffect } from 'react';
import { Recorder } from './recorder';
import { VolumeChecker } from './volume_checker';

export function GetUserMediaSupported() {
    const [mediaRecorder, setMediaRecorder] = useState("loading")
    const [stream, setStream] = useState()
    const onSuccess = (stream) => {
        setMediaRecorder(new MediaRecorder(stream));
        setStream(stream)
    }
    const onError = (error) => {
        setMediaRecorder("errored");
    }
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({audio: true}).then(onSuccess, onError)
    }, []);

if (mediaRecorder instanceof MediaRecorder)
    return (
        <div className="flex flex-col gap-4">
            <VolumeChecker stream={stream}/>
            <Recorder mediaRecorder={mediaRecorder}/>
        </div>  
    )
else if (mediaRecorder === "errored")
    return (
        <div className="flex flex-col gap-4">
            <p className="text-center">Unfortunately there where an issue in the set up.</p>
        </div>  
    )
else
    return (
        <div className="flex flex-col gap-4">
            <p className="text-center">Great news You're device support audio recording. We're setting things up.</p>
        </div>  
    )

};
  