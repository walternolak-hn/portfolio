import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import RegisterPage from '../pageobjects/register.page';

const pages = {
    login: LoginPage,
    home: HomePage,
    register: RegisterPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
});

When(/^I save some (\w+) baseline screenshots$/, (page) => {
    browser.saveScreen(`${page}Page`, { /* some options */ });
});

When(/^I delete some elements in the (\w+) page$/, (page) => {
    switch (page) {
        case "home":
            HomePage.deleteUIElements()
            break;
        case "register":
            RegisterPage.deleteUIElements()
            break;
        case "login":
            LoginPage.deleteUIElements()
            break;
    
        default:
            break;
    }
});

Then(/^I should see a comparison to see if there are differences in the (\w+) page$/, (page) => {
    expect(browser.checkScreen(`${page}Page`, { /* some options */ })).toEqual(0);
});

