export class MediaRecorder {
  constructor({onStart, onStop, state = null}) {
    this.onStart = onStart
    this.onStop = onStop
    this.state = state
  }
 
  
}
  