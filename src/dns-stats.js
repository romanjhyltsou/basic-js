const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const array = domains.map(domain => domain.split('.'));
  let max = array[0];
  for (let i = 1; i < array.length; i += 1) {
    const curr = array[i];
    if (curr.length > max.length) {
      max = curr;
    }
  }
  const size = max.length - 1;
  const result = {};
  let name = '';
  for (let i = 0; i <= size; i += 1) {
    let el = max[size - i];
    name +=  `.${el}`; 
    let counter = 0;
    array.forEach(arr => {
      if (arr.includes(el)) {
        counter += 1;
      }
    })
    result[name] = counter;
  }
  return result;
}

module.exports = {
  getDNSStats
};
