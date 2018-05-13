import { OnlinePoliceComplaintPage } from './app.po';

describe('online-police-complaint App', function() {
  let page: OnlinePoliceComplaintPage;

  beforeEach(() => {
    page = new OnlinePoliceComplaintPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
