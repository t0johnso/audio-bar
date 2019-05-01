import { Component, Input } from '@angular/core';

@Component({
  selector: 'aud-audio-bar',
  templateUrl: './audio-bar.component.html',
  styleUrls: ['./audio-bar.component.scss']
})
export class AudioBarComponent {
  @Input() recording: boolean;
  @Input() recorded: boolean;
  @Input() playing: boolean;
  constructor() { }
}
