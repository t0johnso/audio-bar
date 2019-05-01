import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorderPlayerComponent } from './recorder-player.component';

describe('RecorderPlayerComponent', () => {
  let component: RecorderPlayerComponent;
  let fixture: ComponentFixture<RecorderPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorderPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorderPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
