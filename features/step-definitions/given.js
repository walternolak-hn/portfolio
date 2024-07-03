import { Given } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';

Given("I am on the login page", async () => {
    await LoginPage.open();
});