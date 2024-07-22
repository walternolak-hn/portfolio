import { When } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page.js';
import ElementsPage from '../pageobjects/elements.page.js';
import HoversPage from '../pageobjects/hovers.page.js';

// Login
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

// Add and Remove Elements
When(/^I add (\d+) Elements$/, async (amount) => {
    await ElementsPage.btnAddElements.waitForDisplayed();
    await ElementsPage.addElements(amount);
    await browser.pause(1000);
});
When(/^I delete (\d+) Elements$/, async (amount) => {
    await ElementsPage.btnAddElements.waitForDisplayed();
    await ElementsPage.deleteElements(amount);
});

// Hovers
When(/^I hover over (\w+)$/, async (username) => {
    await HoversPage.hoverOverElements(username);
});