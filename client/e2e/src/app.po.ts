import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBrandText() {
    browser.waitForAngular();
    return element(by.css('mat-toolbar')).getText();
  }
}
