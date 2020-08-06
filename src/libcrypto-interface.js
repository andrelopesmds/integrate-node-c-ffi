let ffi = require('ffi');

let libcrypto = ffi.Library('libcrypto', {
    'MD5': [ 'string', [ 'string' , 'int', 'string' ] ]
});


let buffer = new Buffer.alloc(16);

const getMD5 = (string) => {
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
