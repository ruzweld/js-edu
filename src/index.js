/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'friends',
  knowsProgramming = true,
  config = {friends: 10}
  )
  {
    let timeEducation = knowsProgramming ? 800 : 1300;
    return Math.ceil(timeEducation / config[focus]);
};
