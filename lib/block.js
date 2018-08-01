export default class Block {
  /*
  * Gets the unix timestamp in seconds of the current block.
  * @return {BigNumber} The converted BigNumber.
  */
  static timestamp() {
    return web3.eth.getBlock(web3.eth.blockNumber).timestamp;
  }
}