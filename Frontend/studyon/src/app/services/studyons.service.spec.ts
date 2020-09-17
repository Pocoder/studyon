import { TestBed } from '@angular/core/testing';

import { StudyonsService } from './studyons.service';

describe('StudyonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudyonsService = TestBed.get(StudyonsService);
    expect(service).toBeTruthy();
  });
});
