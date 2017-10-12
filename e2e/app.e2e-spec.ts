import { AttributedirectivePage } from './app.po';

describe('attributedirective App', () => {
  let page: AttributedirectivePage;

  beforeEach(() => {
    page = new AttributedirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
