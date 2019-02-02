import { browser, by, element } from 'protractor';

export class CategoryPage {
  navigateTo() {
    return browser.get('/');
  }

  getCategoriesText() {
    browser.waitForAngular();
    return element(by.css('mat-nav-list')).all(by.css('.mat-list-item-content')).getText();
  }
}
