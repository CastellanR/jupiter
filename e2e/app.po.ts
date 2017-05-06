import { browser, element, by } from 'protractor';

export class JupiterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jup-root h1')).getText();
  }
}
