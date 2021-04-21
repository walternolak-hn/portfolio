import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#username')
    }
    get inputPassword() {
        return $('#password')
    }
    get loginButton() {
        return $('#login')
    }
    get NewUserButton() {
        return $('#newUser')
    }
    get headerTitle() {
        return $('div.main-header')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }
    deleteUIElements() {
        browser.execute((loginButton, NewUserButton, headerTitle) => {
            return loginButton.remove(), NewUserButton.remove(), headerTitle.remove()
        }, this.loginButton, this.NewUserButton, this.headerTitle)
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();