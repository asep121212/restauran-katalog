const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();
/** @type {CodeceptJS.MainConfig} */

exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
        url: 'http://127.0.0.1:9000',
        show: true,
        windowSize: '1280x900',
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'nordfoodies',
  }