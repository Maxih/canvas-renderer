import { Injectable, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { CanvasElement } from './canvas-element';

@Injectable()
export class CanvasRenderer implements Renderer2 {
  data: {
    [key: string]: any;
  };
  destroyNode: ((node: any) => void) | null;

  constructor(private eventManager: EventManager) {

  }

  destroy(): void {

  }
  createElement(name: string, namespace?: string | null): CanvasElement {
    console.log('create', name, namespace);
    return new CanvasElement(null, name);
  }
  createComment(value: string): any {
    console.log('comment', value);
    return value;
  }
  createText(value: string): CanvasElement {
    return new CanvasElement(null, '#text', value);
  }

  appendChild(parent: CanvasElement, newChild: CanvasElement): void {
    console.log('append', parent.element, newChild.element, newChild.text);
    parent.appendNode(newChild);
    newChild.drawNode();
  }
  insertBefore(parent: any, newChild: any, refChild: any): void {
    console.log('insert', parent, newChild, refChild);
  }
  removeChild(parent: any, oldChild: any): void {
    console.log('remove');
  }
  selectRootElement(selectorOrNode: string | any): CanvasElement {
    const el: HTMLCanvasElement = document.querySelector('#' + selectorOrNode) as HTMLCanvasElement;

    return new CanvasElement(el.getContext('2d'), 'canvas');
  }
  /**
   * Attention: On WebWorkers, this will always return a value,
   * as we are asking for a result synchronously. I.e.
   * the caller can't rely on checking whether this is null or not.
   */
  parentNode(node: any): any {
    console.log('parent', node);
  }
  /**
   * Attention: On WebWorkers, this will always return a value,
   * as we are asking for a result synchronously. I.e.
   * the caller can't rely on checking whether this is null or not.
   */
  nextSibling(node: any): any {
    console.log('sibling');
  }
  setAttribute(el: any, name: string, value: string, namespace?: string | null): void {

  }
  removeAttribute(el: any, name: string, namespace?: string | null): void {

  }
  addClass(el: any, name: string): void {

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
