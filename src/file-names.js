const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let namesChange = {};

  let array = names.map(item => {
    let counter = 0;
    if(item in namesChange) {
      counter = namesChange[item];
    };
    
    namesChange[item] = counter + 1;

    if(counter === 0) {
      return item;
    }
    
    for(let key in namesChange) {
      if(key === item && namesChange[key] === counter) {
        counter++;
      }
    }

    namesChange[`${item}(${counter})`] = 1;
    
    return `${item}(${counter})`;
  });

  return array;
}

module.exports = {
  renameFiles
};
