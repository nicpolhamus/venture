import { MutableRefObject } from 'react';

import { Color } from './Color';

export interface CanvasData {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  imageData: ImageData;
  pixels: Uint8ClampedArray;
}

export class Image {
  public canvasData: CanvasData;

  constructor(public width: number, public height: number, public canvas: MutableRefObject<HTMLCanvasElement>) {
    this.canvasData = this.createCanvas();
  }

  private createCanvas(): CanvasData {
    const canvas = this.canvas.current;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    const imageData = context.getImageData(0, 0, this.width, this.height);
    const pixels = imageData.data;

    return { canvas, context, imageData, pixels };
  }

  putPixel(x: number, y: number, color: Color): void {
    const offset = (y * this.width + x) * 4;

    this.canvasData.pixels[offset] = color.red | 0;
    this.canvasData.pixels[offset + 1] = color.green | 0;
    this.canvasData.pixels[offset + 2] = color.blue | 0;
    this.canvasData.pixels[offset + 3] = 255;
  }

  /* TODO: abstract this out into React so that it handles updating the canvas in the DOM */
  renderInto(element: HTMLElement): void {
    this.canvasData.context.putImageData(this.canvasData.imageData, 0, 0);

    element.appendChild(this.canvasData.canvas);
  }
}
