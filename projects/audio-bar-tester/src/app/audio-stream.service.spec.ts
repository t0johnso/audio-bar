import { TestBed } from '@angular/core/testing';

import { AudioStreamService } from './audio-stream.service';

describe('AudioStreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioStreamService = TestBed.get(AudioStreamService);
    expect(service).toBeTruthy();
  });
});
