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
    async verifyHomePage() {
      await this.getText('@welcomeMsg', result => {
        const text = result.value;
        console.log(text);
        return this.waitUntilVisibleElement('@welcomeMsg');
      });
    },
    async enterLoginCredentials() {
      await this.clickVisibleElement('@login');
      await this.setField('@emailAddress', loginCredentials.automationTestUser);
      await this.setField('@password', loginCredentials.automationPassword);
    },

    async clickLoginButton() {
      await this.clickVisibleElement('@loginButton');
    },

    async verifyLogin() {
      await this.getText('@welcomeMsg', async result => {
        const welcomeMessageUserName = result.value;
        await console.log(welcomeMessageUserName);
        await this.checkElementTextContains(
          '@welcomeMsg',
          loginCredentials.automationTestUser
        );
        await console.log(
          'login Success ->',
          `${loginCredentials.automationTestUser} Logged in successfully`
        );
      });
    },
  },
];

module.exports = {
  elements,
  commands,
};
