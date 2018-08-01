const web3 = require('web3');

export default class Block {
  /*
  * Gets the unix timestamp in seconds of the current block.
  * @return {Number} The block's timestamp.
  */
  static timestamp() {
    return web3.eth.getBlock(web3.eth.blockNumber).timestamp;
  }
}