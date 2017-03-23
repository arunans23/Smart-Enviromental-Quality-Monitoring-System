import { SmartEnvironmentQualityProfileManagerPage } from './app.po';

describe('smart-environment-quality-profile-manager App', function() {
  let page: SmartEnvironmentQualityProfileManagerPage;

  beforeEach(() => {
    page = new SmartEnvironmentQualityProfileManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
