import { GitHubProfilePage } from './app.po';

describe('git-hub-profile App', () => {
  let page: GitHubProfilePage;

  beforeEach(() => {
    page = new GitHubProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
