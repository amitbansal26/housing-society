import { HousingUiPage } from './app.po';

describe('housing-ui App', () => {
  let page: HousingUiPage;

  beforeEach(() => {
    page = new HousingUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
