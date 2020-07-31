let ffi = require('ffi');

let libc = ffi.Library('libc', {
    'printf': [ 'void', [ 'string' ] ]
});


function print(string) {
    libc.printf(string);
}


const getMD5 = (string) => {
    return "not working";
}

module.exports = {
    getMD5
};
