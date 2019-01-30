const seleniumServer = require('selenium-server-standalone-jar');
const chromeDriver = require('chromedriver');
const ieDriver = require('iedriver');
const geckoDriver = require('geckodriver');

module.exports = {
  src_folders: 'src/frontend/features',
  output_folder: 'reports/frontend',
  custom_commands_path: 'src/helper/custom_commands',
  custom_assertions_path: '',
  stepDefinitions: 'src/frontend/stepDefinitions',
  page_objects_path: 'src/frontend/pageObjects',
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromeDriver.path,
      'webdriver.gecko.driver': geckoDriver.path,
      'webdriver.ie.driver': ieDriver.path,
    },
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['--disable-gpu'],
        },
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['--window-size=1920,1080'],
        },
      },
    },
    ie: {
      desiredCapabilities: {
        browserName: 'ie',
        javascriptEnabled: true,
        acceptSslCerts: true,
        elementScrollBehavior: 1,
        ieOptions: {
          args: ['--window-size=1920,1080'],
        },
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
};
