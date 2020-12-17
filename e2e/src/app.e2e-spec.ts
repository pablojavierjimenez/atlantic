import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import * as puppeteer from 'puppeteer';

describe('workspace-project App', () => {

  /**
   * * Here is a Puppeteer test code example
   */
  it('Puppeteer screenshot - from APP', async () => {
    const pptrBrowser = await puppeteer.launch();
    const pptrPage = await pptrBrowser.newPage();
    await pptrPage.goto('http://localhost:4200');
    await pptrPage.screenshot({ path: 'e2e/screenshot/index-home-screenshot.png' });

    await pptrBrowser.close();
  });

  /**
   * * this is an Protractor-Jasmine example,
   * * You can still using both puppeter and protractor
   * ! Just keep sure that there no variable name colision
   */
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('atlantic app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
