/* eslint-disable import/no-extraneous-dependencies */
/* this is a setup file.Basically allows us to setup/end
certain things before and after the test scenarios */

const { setDefaultTimeout, BeforeAll, Before, AfterAll } = require('cucumber');

const { client, createSession, closeSession } = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await createSession({ env: process.env.env });
});

Before(() => {
  client.maximizeWindow();
  return client.init(
    'https://sage300v2017-int.dev-mysagestore.com/en/user/logout'
  );
});

AfterAll(async () => {
  await closeSession();
});
