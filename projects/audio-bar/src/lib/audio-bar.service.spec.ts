import { TestBed } from '@angular/core/testing';

import { AudioBarService } from './audio-bar.service';

describe('AudioBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioBarService = TestBed.get(AudioBarService);
    expect(service).toBeTruthy();
  });
});
