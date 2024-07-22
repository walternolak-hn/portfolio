import Page from './page.js';
class HoversPage extends Page {

    get headerTitle() { return $('h3=Hovers') }
    get listUsers() { return $$('div.figure') }
    get username() { return $$('div.figcaption > h5') }
    get linkViewProfile() { return $('=View profile') }

    async open() {
        return super.open('/hovers');
    }

    async hoverOverElements(username) {
        let users = await this.listUsers.length;
        if (users > 0) {
            if (username == 'user1') {
                await this.listUsers[0].moveTo();

            } else if (username == 'user2') {
                await this.listUsers[1].moveTo();

            } else if (username == 'user3') {
                await this.listUsers[2].moveTo();

            }
        } else {
            console.log("No users found!");
        }
    }
}

export default new HoversPage();
