import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyonsComponent } from './studyons.component';

describe('StudyonsComponent', () => {
  let component: StudyonsComponent;
  let fixture: ComponentFixture<StudyonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
