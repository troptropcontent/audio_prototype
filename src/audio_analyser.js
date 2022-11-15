export function AudioAnalyser({ stream }) {
    
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    const source = stream ? audioCtx.createMediaStreamSource(stream) : null
    if (source) {
        source.connect(analyser)
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray)
    }
    console.log(source)
    
    return <h1>Analyser</h1>
};
  