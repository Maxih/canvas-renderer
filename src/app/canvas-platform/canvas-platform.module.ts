import { NgModule, RendererFactory2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasRendererFactory } from './canvas-renderer-factory.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [
    {provide: RendererFactory2, useClass: CanvasRendererFactory}
  ]
})
export class CanvasPlatformModule { }
