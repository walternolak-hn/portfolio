import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get headerTitle() {
        return $('div.main-header')
    }
    get firstNameWrapper() {
        return $('#firstname-wrapper')
    }
    get backToLoginButton() {
        return $('#gotologin')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    deleteUIElements() {
        browser.execute((headerTitle, firstNameWrapper, backToLoginButton) => {
            return headerTitle.remove(), firstNameWrapper.remove(), backToLoginButton.remove()
        }, this.headerTitle, this.firstNameWrapper, this.backToLoginButton)
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('register');
    }
}

export default new RegisterPage();