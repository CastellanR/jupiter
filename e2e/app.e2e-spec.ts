import { JupiterPage } from './app.po';

describe('jupiter App', () => {
  let page: JupiterPage;

  beforeEach(() => {
    page = new JupiterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
