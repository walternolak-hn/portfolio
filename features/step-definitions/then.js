import { Then } from '@cucumber/cucumber';
import { expect } from '@wdio/globals'

import SecurePage from '../pageobjects/secure.page';

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveText(message);
    await browser.pause(1000);
});