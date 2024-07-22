import { Then } from '@cucumber/cucumber';
import { expect } from '@wdio/globals'

import SecurePage from '../pageobjects/secure.page.js';
import ElementsPage from '../pageobjects/elements.page.js';
import HoversPage from '../pageobjects/hovers.page.js';

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

// Hovers
Then(/^I can see (\w+) additional info$/, async (username) => {
    expect(await HoversPage.linkViewProfile).toHaveText('View profile');

    if (username == 'user1') {
        expect(await HoversPage.username[0].getText()).toEqual(`name: ${username}`);
        expect(await HoversPage.linkViewProfile).toHaveAttribute('href', '/users/1');

    } else if (username == 'user2') {
        expect(await HoversPage.username[1].getText()).toEqual(`name: ${username}`);
        expect(await HoversPage.linkViewProfile).toHaveAttribute('href', '/users/2');

    } else if (username == 'user3') {
        expect(await HoversPage.username[2].getText()).toEqual(`name: ${username}`);
        expect(await HoversPage.linkViewProfile).toHaveAttribute('href', '/users/3');

    }
    await browser.pause(500);
});