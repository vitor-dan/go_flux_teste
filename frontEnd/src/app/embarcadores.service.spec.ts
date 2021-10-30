import { TestBed } from '@angular/core/testing';

import { EmbarcadoresService } from './embarcadores.service';

describe('EmbarcadoresService', () => {
  let service: EmbarcadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbarcadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
