const request = require('superagent');

function getUrl(route, input) {
    const URL = 'http://localhost:8080';

    return `${ URL }/${ route }?input=${input}`
}

const inputOutput = [
    ['username', '14c4b06b824ec593239362517f538b29'],
    ['useremail', '54dc62b2186d764362e96f604822f943'],
    ['password', '5f4dcc3b5aa765d61d8327deb882cf99']
]

describe('Js route', () => {
    test.each(inputOutput)('Generate the correct hash for %s', async (input, output) => {
        const response = await request.get(getUrl('js', input))

        expect(response.text).toBe(output);
    })
})

describe('C route', () => {
    test.each(inputOutput)('Generate the correct hash for %s', async (input, output) => {
        const response = await request.get(getUrl('c', input))

        expect(response.text).toBe(output);
    })
})

describe('Rust route', () => {
    test.each(inputOutput)('Generate the correct hash for %s', async (input, output) => {
        const response = await request.get(getUrl('rust', input))

        expect(response.text).toBe(output);
    })
})
