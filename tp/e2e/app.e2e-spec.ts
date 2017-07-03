import { TpPage } from './app.po';

describe('tp App', () => {
  let page: TpPage;

  beforeEach(() => {
    page = new TpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to imdb!!');
  });
});
