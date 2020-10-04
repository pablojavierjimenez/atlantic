## How Setting Jest as a unit testing test tool

### Nota:
  - Here you can find the [Puppeteer Documentation](https://pptr.dev/)
  - For wirite the test easily I recomend install the [_Headless Recorder - chrome extencion_](https://chrome.google.com/webstore/detail/headless-recorder/djeegiggegleadkkbgopoonhjimgehda?utm_source=chrome-ntp-icon)
  - This **Puppeteer** setting with angular and prootractor is based on [this article](https://stackoverflow.com/questions/51536244/how-to-use-puppeteer-in-an-angular-application)

- **Step 1: Install Puppeteer dependenciaes**
  ```bash
  :~$ npm install --save-dev puppeteer @types/puppeteer
  ```

- **Step 2: Configure Protractor to use Puppeteer**
  Edit your `e2e/protractor.conf.js` and add the following inside capabilities:
  ```javascript
  // ...
  const puppeteer = require('puppeteer');

  exports.config = {
    // ...
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless'],
        binary: puppeteer.executablePath(),
      },
    },
    // ...
  };
  ```

- **Step 3: Write and execute your tests**

  For example, edit your `e2e/src/app.e2e-spec.ts` and do the following:
  ```typescript
  import puppeteer from 'puppeteer';

  describe('workspace-project App', () => {
    it('Puppeteer screenshot - from APP', async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('http://localhost:4200');
      await page.screenshot({ path: 'e2e/snapshot/index-home-screenshot.png' });

      await browser.close();
    });
  });
  ```
