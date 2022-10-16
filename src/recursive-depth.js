const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const array = [];

    if(arr.length === 0) {
      return 1;
    }

    arr.forEach(item => {
      let counter = 1;
      if(Array.isArray(item)) {
        counter += this.calculateDepth(item);
      }
      array.push(counter);
    });    
      return array.sort((a, b) => b - a)[0];
    }  
}

module.exports = {
  DepthCalculator
};
