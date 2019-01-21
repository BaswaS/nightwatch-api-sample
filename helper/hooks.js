/* this is a setup file.Basically allows us to setup/end
certain things before and after the test scenarios */

const { Before, After, BeforeAll, AfterAll } = require('cucumber');
const { client } = require('nightwatch-cucumber');

let launchUrl;

BeforeAll(() => {
  setTimeout(() => {}, 5000);
  launchUrl = process.env.testURL;
});

Before(() => {
  setTimeout(() => {}, 5000);
  client.maximizeWindow();
  return client.init(launchUrl);
});

After(() => {
  setTimeout(() => {}, 5000);
  return client.end();
});

AfterAll('AfterFeatures', () => {
  if (client.end) {
    client.end();
  } else
    console.log(
      'All features tests finished. called client.end but client.end is not defined.'
    );
});
