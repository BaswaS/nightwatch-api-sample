// const environmentVariable = {
//   frontEndBaseURL:
//     process.env.envname === 'int'
//       ? 'https://sage300v2017-int.dev-mysagestore.com/user/logout'
//       : 'https://sage300v2017-int.dev-mysagestore.com/user/logout',
//   baseBackendURL:
//     process.env.envname === 'staging'
//       ? 'https://sage300v2017.staging.mysagestore.com/user/logout'
//       : '',
// };

const loginCredentials = {
  automationTestUser: 'test',
  automationPassword: 'test',
};

module.exports = {
  loginCredentials,
  waitForConditionTimeout: 60000,
};
