import { JsonViewerPage } from './app.po';

describe('json-viewer App', () => {
  let page: JsonViewerPage;

  beforeEach(() => {
    page = new JsonViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
