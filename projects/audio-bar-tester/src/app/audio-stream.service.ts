import { Injectable } from '@angular/core';
declare var MediaRecorder; //MediaRecorder not registered with TS version

@Injectable({
  providedIn: 'root'
})
export class AudioStreamService {

  constructor() { }

  async getStream(){
    let stream = null;
    try {
      let options = await navigator.mediaDevices.getSupportedConstraints();
      console.log({options});
      stream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});
    } catch(err){console.log(err)}
    return stream;
  }

  async getRecorder(stream) {
    let recorder = null;
    try {
      recorder = new MediaRecorder(stream);
    } catch(err){ console.log(err)}
    return recorder;
  }

  setUpRecorder = (recorder, chunks:any[], audioElement: HTMLAudioElement) => {
    recorder.onstart = (e) => {chunks.length = 0};
    recorder.ondataavailable = (e)=>{chunks.push(e.data)};
    recorder.onError = (err) => console.log(err);
  }

  download(dataChunks:any[]){
    var downLoadLink = document.createElement('a');
    let blob = new Blob(dataChunks, {type: 'audio/mpeg-3'});
    let datestamp = new Date().toISOString().replace(/[-:.]/gi, '_');
    var url = URL.createObjectURL(blob);
    downLoadLink.href = url;
    downLoadLink.download = 'audio-recording'+datestamp+'.mp3';
    downLoadLink.click();
  }

}
