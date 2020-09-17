import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyonComponent } from './studyon.component';

describe('StudyonComponent', () => {
  let component: StudyonComponent;
  let fixture: ComponentFixture<StudyonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
