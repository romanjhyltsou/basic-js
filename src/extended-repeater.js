const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let stringNew = String(str);
  if (options.addition !== undefined) {
    const addStr = String(options.addition);
    const addColl = [addStr];
    for (let j = 2; j <= options.additionRepeatTimes; j += 1) {
      addColl.push(addStr);
    }
    stringNew += addColl.join(options.additionSeparator || '|');
  }
  const array = [stringNew];
  for (let i = 2; i <= options.repeatTimes; i += 1) {
    array.push(stringNew)
  }
  return array.join(options.separator || '+')
}

module.exports = {
  repeater
};
