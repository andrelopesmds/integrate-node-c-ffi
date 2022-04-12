let ffi = require('ffi');
var path = require('path');

let lib = ffi.Library(path.join(__dirname, '../target/debug/libmain.so'), {
  getMD5: ['string', ['string']]
})

const getMD5 = (string) => {
  const result = lib.getMD5(string)

  return result.toString();
}

module.exports = {
  getMD5
}