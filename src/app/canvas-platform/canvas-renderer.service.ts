import { Injectable, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { CanvasXml } from './canvas-xml';

@Injectable()
export class CanvasRenderer implements Renderer2 {
  context: CanvasXml;

  data: {
    [key: string]: any;
  };
  destroyNode: ((node: any) => void) | null;

  constructor(private eventManager: EventManager) {

  }

  destroy(): void {

  }
  createElement(name: string, namespace?: string | null): Element {
    return this.context.createElement(name);
  }
  createComment(value: string): Comment {
    return this.context.createComment(value);
  }
  createText(value: string): Text {
    return this.context.createText(value);
  }

  appendChild(parent: Element, newChild: Element): void {
    parent.appendChild(newChild);

    this.context.drawCanvas();
  }
  insertBefore(parent: any, newChild: any, refChild: any): void {
    console.log('insert', parent, newChild, refChild);
  }
  removeChild(parent: any, oldChild: any): void {
    console.log('remove');
  }
  selectRootElement(selectorOrNode: string | any): Element {
    const el: HTMLCanvasElement = document.querySelector('#' + selectorOrNode) as HTMLCanvasElement;
    const context: CanvasRenderingContext2D = el.getContext('2d');
    this.context = new CanvasXml(context, selectorOrNode);

    return this.context.selectRootNode();
  }
  parentNode(node: any): any {
    console.log('parent', node);
  }

  nextSibling(node: any): any {
    console.log('sibling');
  }
  setAttribute(el: Element, name: string, value: string, namespace?: string | null): void {
    el.setAttribute(name, value);
  }
  removeAttribute(el: any, name: string, namespace?: string | null): void {

  }
  addClass(el: any, name: string): void {
    console.log(el, name);
    this.context.addClass(el, name);
  }
  removeClass(el: any, name: string): void {

  }
  setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void {

  }
  removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {

  }
  setProperty(el: any, name: string, value: any): void {

  }
  setValue(node: any, value: string): void {

  }
  listen(target: 'window' | 'document' | 'body' | any, eventName: string, callback: (event: any) => boolean | void): any {

  }
}
