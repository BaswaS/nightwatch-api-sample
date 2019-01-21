require('./src/config/envConfig');

const seleniumServer = require('selenium-server');
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
  live_output: false,
  disable_colors: false,
  test_workers: {
    enabled: process.env.ParallelRun ? JSON.parse(process.env.ParallelRun) : false,
    workers: 'auto'
  },
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: 'reports/',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromeDriver.path,
      'webdriver.gecko.driver': geckoDriver.path,
      'webdriver.ie.driver': ieDriver.path,
    }
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: 'reports/frontEnd/screenShots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        elementScrollBehavior: 1,
        chromeOptions: {
          args: ['--headless', '--disable-gpu']
        },
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        elementScrollBehavior: 1,
        chromeOptions: {
          args: ['--window-size=1920,1080'],
        },
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromeDriver.path,
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
        }
      },
      selenium: {
        cli_args: {
          'webdriver.ie.driver': ieDriver.path,
        },
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': geckoDriver.path,
        },
      },
    },
  },
};
