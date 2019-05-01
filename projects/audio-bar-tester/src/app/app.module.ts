import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AudioBarModule } from 'audio-bar';
import { RecorderPlayerComponent } from './recorder-player/recorder-player.component';
import { AudioStreamService } from './audio-stream.service';

@NgModule({
  declarations: [
    AppComponent,
    RecorderPlayerComponent
  ],
  imports: [
    BrowserModule,
    AudioBarModule
  ],
  providers: [AudioStreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
