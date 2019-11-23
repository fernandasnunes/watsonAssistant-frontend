import { TestBed } from '@angular/core/testing';

import { WatsonAssistantService } from './watson-assistant.service';

describe('WatsonAssistantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatsonAssistantService = TestBed.get(WatsonAssistantService);
    expect(service).toBeTruthy();
  });
});
