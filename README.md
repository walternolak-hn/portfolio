# WebdriverIO - Web Automation Testing

This project uses this site to automate tests: [The Internet Website](https://the-internet.herokuapp.com/)

#### Considerations
1. Uses Cucumber framework
2. Uses the latest version of [WebdriverIO](https://webdriver.io/)
3. Supports cross-browser testing in Chrome, Safari, Firefox
4. Test feature files are located under the **Features** folder
5. Uses Spec reporter (CLI)
6. Uses Page Object Model
7. Runs locally

#### Installation
1. `git clone`
2. `npm install`: Install all project dependencies and download the browser's binaries

#### Running tests
- `npm run e2e`: By default, it will run All the tests under the **Features** folder <br>
- To run an specific test: `npx wdio ./wdio.conf.js --spec ./features/login.feature`

#### Test Report
- **Spec** Test report will be shown in the CLI after test execution ends
