import { ProgramPage } from './app.po';

describe('program App', () => {
  let page: ProgramPage;

  beforeEach(() => {
    page = new ProgramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
