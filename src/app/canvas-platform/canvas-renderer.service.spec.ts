import { TestBed, inject } from '@angular/core/testing';

import { CanvasRendererService } from './canvas-renderer.service';

describe('CanvasRendererService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanvasRendererService]
    });
  });

  it('should be created', inject([CanvasRendererService], (service: CanvasRendererService) => {
    expect(service).toBeTruthy();
  }));
});
