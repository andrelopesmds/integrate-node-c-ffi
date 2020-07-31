const cryptoJs = require('crypto-js');

const getMD5 = (string) => {
    return (cryptoJs.MD5(string)).toString();
}

module.exports = {
    getMD5
};
