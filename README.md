# CanvasRenderer

This is an educational project used for experimenting with the abstraction between Angulars components and render strategy.
The goal to render an angular app inside a canvas is contrived and was not meant to suit any particular need.

## Overview

This project bootstraps Angular using a platform whose RendererFactory2 is overloaded by the CanvasRendererFactory.
This factory returns an instance of the test renderer CanvasRenderer, which writes to an XML Document instead of the Browsers
DOM. The XML document is then rendered inside of an SVG, which is saved as an image and ultimately drawn onto the canvas.

## Installation

This was made using Angulars CLI, and can be installed and run using `npm install`/`ng serve`

## Thoughts

In my opinion, the abstraction between Angular and the DOM is one of the more interesting paradigms in the angular framework.
The most obvious example of the importance of this abstraction is the ability to run component logic in webworkers, and a lower
level understanding of this portion of Angular helps lend credence to the need to abide by Angular best practices in order to avoid
breaking the abstraction layer that makes this possible.
