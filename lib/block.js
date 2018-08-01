module.exports = class Block {
  constructor(web3) {
    this.web3 = web3;
  }

  /*
  * Gets the unix timestamp in seconds of the current block.
  * @return {Number} The block's timestamp.
  */
  static timestamp() {
    return web3.eth.getBlock(web3.eth.blockNumber).timestamp;
  }
}
