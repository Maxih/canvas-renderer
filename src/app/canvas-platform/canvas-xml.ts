export class CanvasXml {
  private canvas: CanvasRenderingContext2D;
  private svgDocument: XMLDocument;
  private canvasDocument: XMLDocument;
  private rootNode: Element;
  private svg: SVGElement;

  constructor(
    canvas: CanvasRenderingContext2D,
    entryNode: string
  ) {
    this.canvas = canvas;
    this.canvasDocument = document.implementation.createDocument('http://www.w3.org/1999/xhtml', entryNode, null);
    this.svgDocument = document.implementation.createDocument('http://www.w3.org/2000/svg', 'svg', null);
    this.rootNode = this.canvasDocument.documentElement;

    this.prepareSVGContext();

    window.onresize = this.resizeCanvas.bind(this);
  }

  createElement(name: string): Element {
    return this.canvasDocument.createElement(name);
  }

  createComment(value: string): Comment {
    return this.canvasDocument.createComment(value);
  }

  createText(value: string): Text {
    return this.canvasDocument.createTextNode(value);
  }

  addClass(el: Element, name: string) {
    el.className = name;
  }

  selectRootNode(): Element {
    return this.rootNode;
  }

  drawCanvas() {

    const DOMURL = window.URL;
    const parser = new XMLSerializer();
    const domString = parser.serializeToString(this.svgDocument.documentElement);

    console.log(domString);
    const img = new Image();
    const svg = new Blob([domString], {type: 'image/svg+xml'});
    const url = DOMURL.createObjectURL(svg);


    img.onload = () => {
      this.clearCanvas();
      this.canvas.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);
    };

    img.src = url;
  }

  private clearCanvas() {
    this.canvas.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
  }

  private resizeCanvas() {
    this.canvas.canvas.width  = window.innerWidth;
    this.canvas.canvas.height = window.innerHeight;

    this.drawCanvas();
  }

  private prepareSVGContext() {
    const foreignObject = this.svgDocument.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    const svg = this.svgDocument.documentElement.appendChild(foreignObject);

    svg.setAttribute('width', '200px');
    svg.setAttribute('height', '200px');

    foreignObject.setAttribute('width', '100%');
    foreignObject.setAttribute('height', '100%');

    foreignObject.appendChild(this.canvasDocument.documentElement);
  }
}
