const _BigNumber = require('bignumber.js');

module.exports = class BigNumber {
  /*
  * Converts the amount to a lower denomination as a BigNumber.
  * eg. (number: 1, decimals: 4) = 10000
  * @param number {BigNumber|number|string} The number to convert.
  * @param decimals {number} The denomination number of decimals to convert to.
  * @return {BigNumber} The converted BigNumber.
  */
  static toDenomination(number, decimals = 0) {
    const bn = new _BigNumber(number);
    const decimalsBn = new _BigNumber(10 ** decimals);
    return bn.times(decimalsBn);
  }

  /*
  * Truncates the decimals off the BigNumber and returns a new BigNumber.
  * @param number {BigNumber} The number to truncate.
  * @return {BigNumber} The truncated BigNumber.
  */
  static bigNumberFloor(bigNumber) {
    return new _BigNumber(bigNumber.toString().split('.')[0]);
  }

  /*
  * Returns the original value increased by a percentage.
  * @param bigNumber {BigNumber} The BigNumber to increase.
  * @param percentage {BigNumber} The percent amount to increase the number by.
  * @return {BigNumber} The increased BigNumber by the percentage.
  */
  static percentIncrease(bigNumber, percentage) {
    return bigNumber.times(new _BigNumber(percentage)).div(new _BigNumber(100)).plus(bigNumber);
  }
}
