import { Then } from '@cucumber/cucumber';
import { expect } from '@wdio/globals'

import SecurePage from '../pageobjects/secure.page.js';
import ElementsPage from '../pageobjects/elements.page.js';

// Login
Then(/^I should see a flash message saying (.*)$/, async (message) => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveText(message);
    await browser.pause(1000);
});

// Add and Remove Elements
Then(/^(\d+) elements are added to the page$/, async (amount) => {
    await ElementsPage.listElements.waitForDisplayed();
    let elements = await ElementsPage.btnDeleteElements.length;
    expect(elements).toEqual(amount);
    await browser.pause(1000);
});
Then(/^I should have (\d+) Elements left$/, async (amount) => {
    let elements = await ElementsPage.btnDeleteElements.length;
    expect(elements).toEqual(amount);
    await browser.pause(1000);
});