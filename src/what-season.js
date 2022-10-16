const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }
  
  if (isNaN(Date.parse(date))) {
    throw new Error('Invalid date!')
  }
  try {
    date.getUTCSeconds()
  } catch { throw new Error('Invalid date!') };
  
  let mon =  date.getUTCMonth();
  
  if(mon <= 1 || mon === 11) {
    return 'winter';
  }
  else if(mon >= 2 && mon <= 4) {
    return 'spring';
  }
  else if(mon >= 5 && mon <= 7) {
    return 'summer';
  }
  else if(mon >= 8 && mon <= 10) {
    return 'fall';
  }
}

module.exports = {
  getSeason
};
