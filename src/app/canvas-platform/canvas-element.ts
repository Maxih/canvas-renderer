export class CanvasElement {
  canvas: CanvasRenderingContext2D;
  element?: string;
  text?: string;
  position?: {x, y} = {x: 0, y: 0};
  size?: {width, height} = {width: 5, height: 10};
  children: CanvasElement[] = [];

  constructor(context: CanvasRenderingContext2D, element?: string, text?: string) {
    this.canvas = context;
    this.element = element;
    this.text = text;
  }

  appendNode(node: CanvasElement) {
    node.canvas = this.canvas;
    node.position = {
      x: this.position.x,
      y: this.children.reduce((total, val) => val.size.height + total, 10) + this.position.y
    }
    this.children.push(node);
    console.log(this.children);
  }

  drawNode() {
    this.canvas.fillText(
      this.text || this.element,
      this.position.x,
      this.position.y
    );
  }
}
