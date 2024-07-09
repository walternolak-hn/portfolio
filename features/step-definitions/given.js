import { Given } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page.js';
import ElementsPage from '../pageobjects/elements.page.js';

// Login
Given("I am on the login page", async () => {
    await LoginPage.open();
});

// Add and Remove Elements
Given("I am on the add-remove elements page", async () => {
    await ElementsPage.open();
});