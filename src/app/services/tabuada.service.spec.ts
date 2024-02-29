import { TestBed } from '@angular/core/testing';

import { TabuadaService } from './tabuada.service';

describe('TabuadaService', () => {
  let service: TabuadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabuadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
