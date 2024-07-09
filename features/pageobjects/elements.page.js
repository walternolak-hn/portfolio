import Page from './page.js';
class ElementsPage extends Page {

    get btnAddElements() { return $('button=Add Element') }
    get btnDeleteElements() { return $$('button=Delete') }
    get headerTitle() { return $('h3=Add/Remove Elements') }
    get listElements() { return $('#elements') }

    async open() {
        return super.open('add_remove_elements/');
    }

    async addElements(amount) {
        for (let i = 0; i < amount; i++) {
            await this.btnAddElements.click();
        }
    }

    async deleteElements(amount) {
        let elementsAdded = await this.btnDeleteElements.length;
        if (elementsAdded > 0) {
            for (let i = 0; i < amount; i++) {
                await this.btnDeleteElements[i].click();
                await browser.pause(300);
            }
        } else {
            console.log("No elements were added previously to the page");
        }
    }
}

export default new ElementsPage();
