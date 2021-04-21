import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
     get headerTitle () { return $('div.main-header') }
     get searchBoxWrapper () { return $('#searchBox-wrapper') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    deleteUIElements() {
        browser.execute((headerTitle, searchBoxWrapper) => {
            return headerTitle.remove(), searchBoxWrapper.remove()
        }, this.headerTitle, this.searchBoxWrapper)
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('books');
    }
}

export default new HomePage();