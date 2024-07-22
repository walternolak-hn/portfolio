import { Given } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page.js';
import ElementsPage from '../pageobjects/elements.page.js';
import HoversPage from '../pageobjects/hovers.page.js';

// Login
Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
});

// Add and Remove Elements
Given(/^I am on the add-remove elements page$/, async () => {
    await ElementsPage.open();
});

// Hovers
Given(/^I am on the hovers page$/, async () => {
    await HoversPage.open();
});