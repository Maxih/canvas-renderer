import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { CanvasRenderer } from './canvas-renderer.service';

@Injectable()
export class CanvasRendererFactory implements RendererFactory2 {

  private rendererByCompId = new Map<string, Renderer2>();
  private defaultRenderer: Renderer2;

  constructor(private eventManager: EventManager) {
    this.defaultRenderer = new CanvasRenderer(eventManager);
  }
  createRenderer() {
    return this.defaultRenderer;
  }
}
