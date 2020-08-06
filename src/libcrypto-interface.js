let ffi = require('ffi');

let libcrypto = ffi.Library('libcrypto', {
    'MD5': [ 'string', [ 'string' , 'int', 'string' ] ]
});


const getMD5 = (string) => {
    if (typeof getMD5.buffer === 'undefined') {
        getMD5.buffer = new Buffer.alloc(16);
    }

    libcrypto.MD5(string, string.length, getMD5.buffer);

    let hash = "";
    for (let i of getMD5.buffer) {
        hash += i.toString(16);
    }

    return hash;
}

module.exports = {
    getMD5
};
