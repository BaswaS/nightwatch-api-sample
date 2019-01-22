/*
 *  This command will
 * wait until a specified element is visible
 */
const global = require('../../helper/constants/constants');

exports.command = function waitUntilVisibleElement(
  element,
  timeout = global.waitForConditionTimeout,
  comment = 'Looked for %s in the page for %d ms',
  wait = true,
  callback
) {
  if (wait) {
    this.waitForElementVisible(element, timeout, comment);
  }

  if (typeof callback === 'function') {
    callback();
  }

  return this; // allows the command to be chained
};
