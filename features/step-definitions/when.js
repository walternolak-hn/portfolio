import { When } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});