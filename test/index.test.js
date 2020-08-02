const request = require('superagent');

const URL = 'http://localhost:8080';
const PATH1 = 'js';
const PATH2 = 'c';
const PARAMETER = 'input=password';
const OUTPUT = '5f4dcc3b5aa765d61d8327deb882cf99';

test('Generate the correct hash using js', async () => {
    const response = await request.get(`${URL}/${PATH1}?${PARAMETER}`)
    
    expect(response.text).toBe(OUTPUT);
});


test('Generate the correct hash using c', async () => {
    const response = await request.get(`${URL}/${PATH2}?${PARAMETER}`);
    
    expect(response.text).toBe(OUTPUT);
});
