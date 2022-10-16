const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let stringNew = '';
  let i = 0;

  while(i < str.length) {
    let temp = str[i];
    let counter = 1;
    let iNext = str[i + counter];
    while(temp === iNext) {
      counter += 1;
      iNext = str[i + counter];
    }
    i += counter;

    if(counter > 1) {
      stringNew += `${counter}`;
    }
    stringNew += `${temp}`;
  }
  return stringNew;
}

module.exports = {
  encodeLine
};
