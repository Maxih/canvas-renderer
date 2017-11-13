import { TestBed, inject } from '@angular/core/testing';

import { CanvasRendererFactoryService } from './canvas-renderer-factory.service';

describe('CanvasRendererFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanvasRendererFactoryService]
    });
  });

  it('should be created', inject([CanvasRendererFactoryService], (service: CanvasRendererFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
