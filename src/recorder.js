import { useState } from "react";
import { StartRecordingButton } from "./start_recording_button";
import { StopRecordingButton } from "./stop_recording_button";
import { AudioPlayer } from "./audio_player";

export function Recorder({mediaRecorder}) {
  const [status, setStatus] = useState("not_started")
  const [chunks, setChunks] = useState([])
  const [audioUrl, setAudioUrl] = useState()
  mediaRecorder.onstop = () => {
    console.log("data available after MediaRecorder.stop() called.");
    const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    setAudioUrl(window.URL.createObjectURL(blob))
  }

  mediaRecorder.ondataavailable = (element) => {
   console.log(element)
   setChunks(current => [...current, element.data])
  }

  const startRecording = () => {
    console.log("recording started")
    mediaRecorder.start(100)
    setStatus("started")

  }
  const stopRecording = () => {
    console.log("recording stoped")
    mediaRecorder.stop()
    setStatus("stoped")
  }
  
  switch (status) {
      case "stoped":
          console.log({audioUrl})
          return <AudioPlayer src={audioUrl}/>
          break;
      case "started":
          return <StopRecordingButton onClick={stopRecording}/>
          break;
      default:
          return <StartRecordingButton onClick={startRecording}/>
          break;
  }
};
  
