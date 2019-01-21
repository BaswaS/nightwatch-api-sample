const { loginCredentials } = require('../../helper/constants/constants');

const elements = {
  login: '.link-login',
  emailAddress: 'input[id="email"]',
  password: 'input[id="pass"]',
  loginButton: 'button[id="send2"]',
  welcomeMsg: '.welcome-msg',
  welcomeUser: '.welcome-msg-user',
  admin: '.link-admin',
  dashboard: '.page-title',
  logout: '.link-logout',
};

const commands = [
  {
    verifyHomePage() {
      this.getText('@welcomeMsg', result => {
        const text = result.value;
        console.log(text);
        return this.waitUntilVisibleElement('@welcomeMsg');
      });
    },
    enterLoginCredentials() {
      this.clickVisibleElement('@login');
      this.setField('@emailAddress', loginCredentials.automationTestUser);
      return this.setField('@password', loginCredentials.automationPassword);
    },

    clickLoginButton() {
      this.clickVisibleElement('@loginButton');
    },

    verifyLogin() {
      this.getText('@welcomeMsg', result => {
        const welcomeMessageUserName = result.value;
        console.log(welcomeMessageUserName);
        this.checkElementTextContains('@welcomeMsg', welcomeMessageUserName);
        return console.log(
          'login Success ->',
          `${loginCredentials.automationTestUser} Logged in successfully`
        );
      });
    },

    clickAdminButton() {
      this.clickVisibleElement('@admin');
    },

    verifyAdminDashboard() {
      this.getText('@dashboard', result => {
        const text = result.value;
        console.log(text);
        return this.waitUntilVisibleElement('@dashboard');
      });
    },

    clickLogout() {
      return this.clickVisibleElement('@logout');
    },
  },
];

module.exports = {
  elements,
  commands,
};
