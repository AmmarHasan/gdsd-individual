import { browser, by, element, ExpectedConditions as EC } from 'protractor';

export class CategoryPage {
  navigateTo() {
    return browser.get('/');
  }

  getCategoriesText() {
    return element.all(by.css('mat-nav-list')).first().all(by.css('.mat-list-item-content')).getText();
  }
}
