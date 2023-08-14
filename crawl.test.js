const {normalizeURL} = require('./crawl.js')
const {test,expect} = require('@jest/globals');

test('normalizURL strip protocol',()=>{
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})

test('normalizURL strip trailing slash',()=>{
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})
test('normalizURL capitals',()=>{
    const input = 'https://BLOG.boot.dev/path';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})

test('normalizURL strip http',()=>{
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})