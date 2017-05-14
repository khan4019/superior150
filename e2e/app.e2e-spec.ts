import { Superior150Page } from './app.po';

describe('superior150 App', () => {
  let page: Superior150Page;

  beforeEach(() => {
    page = new Superior150Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
