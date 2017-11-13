import { CanvasRendererPage } from './app.po';

describe('canvas-renderer App', () => {
  let page: CanvasRendererPage;

  beforeEach(() => {
    page = new CanvasRendererPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
