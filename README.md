# AudioBar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.
This angular library module is a pre-release version 0.1, so not yet vetted/tested for production.

## Angular Project repo
This repo contains both an <b>Audio Bar</b> angular module [projects/audio-bar](https://github.com/t0johnso/audio-bar/tree/master/projects/audio-bar) and an angular tester app [projects/audio-bar-tester](https://github.com/t0johnso/audio-bar/tree/master/projects/audio-bar-tester).   

## Audio-bar-tester
The test app is an Angular 7 app that has a parent component and uses [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder), [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement), [MediaStream API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API). The idea here is that you have a parent component with recorder and HTMLAudioElement to hold the sound file for a mic recorder and a child component with animated playback bar.
So it's a nice sample to get a sense of how you can hook into audio [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) / [MediaStreams](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) in angular projects.

## Audio Bar
The audio bar module is just the animated playback bar. You can set the audio-bar state to animate on 'recording' and 'playing' states. The 'recorded' state is for a visual cue that there is a recording avail for playback.

```
  <aud-audio-bar [playing]="playing" [recording]="recording" [recorded]="recorded"></aud-audio-bar>
```


## Install
The dist/audio-bar is the compiled angular module that you can install from file using npm.
1. clone repo

```
  git clone https://github.com/t0johnso/audio-bar.git
```

2. go to your existing angular project directory

```
  cd ../wherever/my/angular/project/is
```


3. use npm to install from file: compiled module from dist/audio-bar directory in repo
( your path to the audio-bar repo may be a little different based on your directory structure )
```
  npm install --save file:../audio-bar/dist/audio-bar
```

OR: use bower or yarn or whatever makes you happy.  
This makes a permalink/shortcut/alias style of import, so rebuilding the package `ng build nursestation` will affect your import in your project.  

OR: You could also install the npm-packager and package the distribution as a tgz that you can import.  
You can you the npm scripts I've added to the package.json.  
install repo dependencies `npm install` ( angular cli, ng-packager, etc )

```
 npm run package
```


## Usage
Once you've installed the module, you can import the AudioBarModule, into your projects module.  
example: app.module, myfeature.module etc.
```
  import { AudioBarModule } from 'audio-bar';
```


```
  imports: [
    ...
    AudioBarModule
  ],
```

And then in your parent component's template. [playing], [recording], and [recorded] are expecting booleans. You can see I just fed it properties with the same names from my parent component.

```
  <aud-audio-bar [playing]="playing" [recording]="recording" [recorded]="recorded"></aud-audio-bar>
```


## Standard Angular CLI commands:
Keep in mind that because this is a multi-project repo, you'll need to specify with project you want to serve/build/test etc.
example:

```
  ng serve audio-bar-tester
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

you don't serve the audio-bar module, just the audio-bar-tester app

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
