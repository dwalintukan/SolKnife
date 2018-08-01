import Block from './lib/block';
import BigNumber from './lib/bignumber';
import Formatter from './lib/formatter';

class SolKnife {
  constructor() {
    this.block = new Block();
    this.bigNumber = new BigNumber();
    this.formatter = new Formatter();
  }
}

modules.exports = new SolKnife();
