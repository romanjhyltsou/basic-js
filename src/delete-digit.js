const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = n.toString();
  const array = [];
  for (let i = 0; i < string.length; i += 1) {
    array.push(Number(string.slice(0, i) + string.slice(i + 1)));
  }  
  return Math.max(...array);
}

module.exports = {
  deleteDigit
};
