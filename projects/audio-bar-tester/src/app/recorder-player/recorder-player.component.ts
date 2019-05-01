import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AudioStreamService } from '../audio-stream.service';

@Component({
  selector: 'av-recorder-player',
  templateUrl: './recorder-player.component.html',
  styleUrls: ['./recorder-player.component.scss']
})
export class RecorderPlayerComponent implements OnInit, AfterViewInit {
  audioElement: HTMLAudioElement;
  dataChunks = [];
  recorder;
  recording: boolean;
  recorded: boolean;
  playing: boolean;

  constructor(
    private audioStreamService: AudioStreamService,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {}

  onended = (e) => this.playing = false;

  ngAfterViewInit(){
    this.audioElement = document.createElement('audio');
    this.audioElement.addEventListener( 'ended', this.onended );
    this.setUpRecorder(this.dataChunks, <HTMLAudioElement>this.audioElement).catch(err => console.log(err));
  }

  ngOnDestroy(){
    this.audioElement.removeEventListener( 'ended', this.onended );
  }

  async setUpRecorder(dataChunks, audioElement){
  try {
      let stream = await this.audioStreamService.getStream();
      console.log({stream, type: typeof stream});
      let recorder = await this.audioStreamService.getRecorder(stream);
      this.audioStreamService.setUpRecorder(recorder, dataChunks, audioElement);
      recorder.onstop = this.onRecorded();
      this.recorder = recorder;
  } catch(err){throw err} }

  onRecorded(){
    return (e) => {
      let blob = new Blob(this.dataChunks, {type: 'audio/mpeg-3'});
      var audioURL = window.URL.createObjectURL(blob);
      this.audioElement.src = audioURL;
      this.recorded = true;
      this.changeDetectorRef.detectChanges();
    };
  }

  record(){
      if(this.recorder) this.recorder.start();
      this.recording = this.recorder && this.recorder.state == 'recording';
    }

  stopRecording(){
    if(this.recorder) this.recorder.stop();
    this.recorded = true;
    this.recording = this.recorder && this.recorder.state == 'recording';
  };

  play(){
    this.audioElement.play().then(success => {
      this.playing = true;
    });
  }

  pause(){
    this.audioElement.pause();
    this.playing = false;
  }

}
