/**
 * @module is-brexit
 * @description Provides function to get a result of Brexit referendum.
 * @version 2.0.1
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2016-2017 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @function isBrexit
 * @description Get a result of Brexit referendum.
 * @returns {Boolean} - Result of Brexit referendum.
 */

const isBrexit = () => {
  return 52 > 48;
};

module.exports = isBrexit;
