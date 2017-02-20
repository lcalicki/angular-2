import { MyProjectXPage } from './app.po';

describe('my-project-x App', () => {
  let page: MyProjectXPage;

  beforeEach(() => {
    page = new MyProjectXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
