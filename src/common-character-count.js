const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrayFirst = s1.split('').sort();
  const arraySecond = s2.split('').sort();
  const arrayResult = [];
  let i = 0;
  let j = 0;
  while (i < arrayFirst.length) {
    if (arrayFirst[i] === arraySecond[j]) {
      arrayResult.push(arrayFirst[i]);
      i += 1;
      j += 1;
    } else if (arrayFirst[i] < arraySecond[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return arrayResult.length;
}

module.exports = {
  getCommonCharacterCount
};
