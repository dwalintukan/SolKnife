export default class Formatter {
  /*
  * Removes the padded zeros in an address hex string.
  * eg. 0x0000000000000000000000006b36fdf89d706035dc97b6aa4bc84b2418a452f1 -> 0x6b36fdf89d706035dc97b6aa4bc84b2418a452f1
  * @param hexString {string} The hex string to remove the padding from.
  * @return {string} The hex string with the padded zeros removed.
  */
  static paddedHexToAddress(hexString) {
    const regex = new RegExp(/(0x)(0+)([a-fA-F0-9]{40})/);
    const matches = regex.exec(hexString);
    return matches && matches[1] + matches[3];
  }
}
