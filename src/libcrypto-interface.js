let ffi = require('ffi');

let libcrypto = ffi.Library('libcrypto', {
    'MD5': [ 'string', [ 'string' , 'int', 'string' ] ]
});


const getMD5 = (string) => {
    let buffer = new Buffer(16);
    libcrypto.MD5(string, string.length, buffer);

    let hash = "";
    for (let i of buffer) {
        hash += i.toString(16);
    }

    return hash;
}

module.exports = {
    getMD5
};
